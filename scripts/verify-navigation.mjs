import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist');
const origin = 'https://orvalia.com.br';
const files = fs.readdirSync(root, { recursive: true }).filter(file => file.endsWith('.html'));
const decode = value => value.replace(/&amp;/g, '&').replace(/&#x([\da-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16))).replace(/&#(\d+);/g, (_, num) => String.fromCodePoint(Number(num))).replace(/&quot;/g, '"');
const pages = new Map(files.map(file => {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  const url = `/${file.replaceAll(path.sep, '/')}`.replace(/index\.html$/, '');
  return [url, { html, ids: new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => decode(match[1]))) }];
}));
const issues = [];
let links = 0;
let appPages = 0;
const destinations = new Set();
const checkedCanonical = new Set();
for (const [route, page] of pages) {
  if (page.html.includes('id="root"')) appPages++;
  const hrefs = [...page.html.matchAll(/<a\b[^>]*\bhref="([^"]*)"/g)].map(match => decode(match[1]));
  const canonical = page.html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];
  if (canonical) { hrefs.push(decode(canonical)); checkedCanonical.add(canonical); }
  for (const href of hrefs) {
    links++;
    if (!href.trim() || /^(?:javascript|data):/i.test(href)) { issues.push(`${route}: invalid destination ${href}`); continue; }
    const url = new URL(href, origin + route);
    if (url.protocol === 'mailto:') {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(decodeURIComponent(url.pathname))) issues.push(`${route}: invalid email ${href}`);
      continue;
    }
    if (url.protocol === 'tel:') { if (!/^\+?[\d ()-]+$/.test(url.pathname)) issues.push(`${route}: invalid phone ${href}`); continue; }
    if (url.hostname === 'wa.me' && !/^\/\d{10,15}$/.test(url.pathname)) issues.push(`${route}: invalid WhatsApp number`);
    if (!['orvalia.com.br', 'www.orvalia.com.br'].includes(url.hostname)) continue;
    const pathname = decodeURIComponent(url.pathname);
    const key = pathname.endsWith('/') || pathname.endsWith('.html') ? pathname : pathname + '/';
    const target = pages.get(key) || pages.get(key.replace(/index\.html$/, ''));
    destinations.add(key);
    if (!target && !fs.existsSync(path.join(root, pathname))) { issues.push(`${route}: missing page ${href}`); continue; }
    if (url.hash && target && !target.ids.has(decodeURIComponent(url.hash.slice(1)))) issues.push(`${route}: missing anchor ${href}`);
  }
}
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => decode(match[1]));
if (new Set(sitemapUrls).size !== sitemapUrls.length) issues.push('sitemap: duplicate URLs');
for (const href of sitemapUrls) {
  const url = new URL(href);
  const page = pages.get(url.pathname);
  if (!page) { issues.push(`sitemap: missing page ${href}`); continue; }
  const canonical = page.html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];
  if (canonical !== href) issues.push(`sitemap: noncanonical URL ${href}`);
  if (/<meta\b[^>]*name="robots"[^>]*content="[^"]*noindex/i.test(page.html)) issues.push(`sitemap: noindex URL ${href}`);
}
if (issues.length) { console.error([...new Set(issues)].join('\n')); process.exitCode = 1; }
else console.log(`PASS: ${appPages} app pages, ${files.length} HTML files, ${links} link/canonical references, ${destinations.size} internal destinations and ${checkedCanonical.size} canonical URLs; no missing internal pages or anchors, invalid email/phone targets or placeholder links.`);
