import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_URL = 'https://orvalia.com.br';
const articleRoutes = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/article-routes.json'), 'utf8'));
const articleDates = new Map(articleRoutes.map(article => [article.slug, article.modified]));
const canonicalArticleRoutes = new Set(articleRoutes.map(article => article.slug));
const legacyArticleRoutes = new Set(articleRoutes.map(article => article.slug.replace('/blog/', '/')));


const routesToPrerender = [
  '/',
  '/branding/',
  '/sites/',
  '/seo-geo/',
  '/redes-sociais/',
  '/portfolio/',
  '/portfolio/ryna-hayashi/',
  '/portfolio/beth-olmeda/',
  '/portfolio/dario-eletricidade/',
  '/portfolio/debora-bolangno/',
  '/portfolio/elife-fitness/',
  '/portfolio/quinta-de-caraiva/',
  '/portfolio/knj-tur/',
  '/portfolio/smii-care/',
  '/portfolio/marta-ana-chiconato/',
  '/sobre/',
  '/contato/',
  '/blog/',
  // Articles
  '/blog/gap-de-percepcao-digital-empresas-excelentes-comuns/',
  '/blog/branding-indaiatuba/',
  '/blog/identidade-visual-precos/',
  '/blog/erros-marca-amadora/',
  '/blog/logo-vs-branding/',
  '/blog/posicionamento-premium/',
  '/blog/site-profissional-conversao/',
  '/blog/instagram-estrategico/',
  '/blog/por-que-nao-cresce/',
  '/blog/identidade-profissionais-liberais/',
  '/blog/arquitetura-sites-alta-performance-campinas/',
  '/blog/identidade-visual-profissionais-liberais-premium/',
  '/blog/rebranding-digital-b2b-sorocaba-itu-salto/',
  '/blog/guia-marca-forte/',
  '/blog/branding-estrategico-indaiatuba-campinas/',
  '/blog/geo-generative-engine-optimization-buscas-ia/',
  // Regional & Vertical Hubs
  '/branding-estrategico-indaiatuba-campinas/',
  '/branding-para-clinicas-campinas-indaiatuba/',
  '/posicionamento-digital-advogados-indaiatuba/',
  '/design-estrategico-arquitetura-itu-jundiai/',
  '/geo-inteligencia-artificial-empresas-sorocaba/',
  '/percepcao-de-valor-estetica-premium-indaiatuba/',
  '/presenca-digital-estrategica-ia-indaiatuba-campinas/',
  // Solutions
  '/solucoes/criacao-de-sites-indaiatuba/',
  '/solucoes/landing-pages-indaiatuba/',
  '/solucoes/seo-indaiatuba/',
  '/solucoes/branding-em-indaiatuba/',
  '/solucoes/sites-para-medicos-indaiatuba/',
  '/solucoes/sites-para-advogados-indaiatuba/',
  // Legal
  '/privacidade/',
  '/termos/',
  '/cookies/',
  // Legado & Planos
  '/agencia-indaiatuba/',
  '/sites-estrategicos/',
  '/presenca-digital/',
  '/plano-essencial/',
  '/plano-profissional/',
  '/plano-evolucao/'
];

const lowPriorityRoutes = ['/privacidade/', '/termos/', '/cookies/'];

// Share crawlers need the metadata in the initial HTML, including legacy pages.
function completeSharingMetadata(html) {
  const tags = () => Array.from(html.matchAll(/<meta\b[^>]*>/gi), match => match[0]);
  const matching = key => tags().find(tag => tag.match(/(?:property|name)="([^"]+)"/)?.[1] === key);
  const value = key => matching(key)?.match(/content="([^"]*)"/)?.[1];
  const put = (key, content, attribute = 'property') => {
    if (!content) return;
    html = html.replace(/<meta\b[^>]*>/gi, tag => tag.match(/(?:property|name)="([^"]+)"/)?.[1] === key ? '' : tag);
    html = html.replace('</head>', `<meta ${attribute}="${key}" content="${content}" />\n</head>`);
  };
  let title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/)?.[1];
  if (!title?.trim()) {
    const heading = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1]?.replace(/<[^>]+>/g, '').trim();
    title = heading ? `${heading} | Orvalia Studio` : 'Orvalia Studio';
    html = html.replace(/<title[^>]*>[\s\S]*?<\/title>/, `<title data-rh="true">${title}</title>`);
  }
  const description = value('description');
  if (!matching('og:title')?.includes('data-rh=')) put('og:title', title);
  if (!matching('og:description')?.includes('data-rh=')) put('og:description', description);
  if (!matching('twitter:title')?.includes('data-rh=')) put('twitter:title', title, 'name');
  if (!matching('twitter:description')?.includes('data-rh=')) put('twitter:description', description, 'name');
  const image = value('og:image') || 'https://orvalia.com.br/social/orvalia-preview-v1.jpg';
  if (!value('og:image')) put('og:image', image);
  if (!value('og:image:secure_url')) put('og:image:secure_url', image);
  if (!value('og:image:type')) put('og:image:type', image.endsWith('.png') ? 'image/png' : 'image/jpeg');
  if (!value('og:image:width')) put('og:image:width', '1200');
  if (!value('og:image:height')) put('og:image:height', '630');
  if (!value('og:image:alt')) put('og:image:alt', title);
  if (!value('twitter:image')) put('twitter:image', image, 'name');
  if (!value('twitter:image:alt')) put('twitter:image:alt', value('og:image:alt'), 'name');
  return html;
}


async function prerender() {
  console.log('Starting prerendering...');
  
  const serverEntryPath = path.resolve(__dirname, 'dist-server/entry-server.js');
  const { render } = await import(pathToFileURL(serverEntryPath).href);
  
  const templatePath = path.resolve(__dirname, 'dist/index.html');
  const template = fs.readFileSync(templatePath, 'utf-8');
  
  const allRoutes = [...new Set([...routesToPrerender, ...canonicalArticleRoutes])];
  const canonicalRoutes = new Set();
  for (const url of allRoutes) {
    const context = {};
    const appHtml = render(url, context);
    const routePath = url.endsWith('/') ? url : `${url}/`;
    const fullCanonicalUrl = `${SITE_URL}${routePath}`;
    
    const { helmet } = context;
    
    let html = template.replace(
      `<div id="root"></div>`,
      `<div id="root">${appHtml}</div>`
    );

    if (routePath !== '/') {
      html = html.replace(/<script id="home-faq-schema"[\s\S]*?<\/script>/gi, '');
    }
    
    if (routePath === '/' || routePath.startsWith('/portfolio/') || canonicalArticleRoutes.has(routePath) || legacyArticleRoutes.has(routePath) || routePath === '/blog/') {
      html = html.replace(/<script id="entity-schema"[\s\S]*?<\/script>/gi, '');
    }
    if (helmet) {
      const titleString = helmet.title ? helmet.title.toString() : '';
      const metaString = helmet.meta ? helmet.meta.toString() : '';
      const linkString = helmet.link ? helmet.link.toString() : '';
      const scriptString = helmet.script ? helmet.script.toString() : '';
      const suppliedMeta = new Set(Array.from(metaString.matchAll(/(?:name|property)="([^"]+)"/g), match => match[1]));
      html = html.replace(/<meta\b[^>]*>/gi, tag => {
        const key = tag.match(/(?:name|property)="([^"]+)"/i)?.[1];
        return suppliedMeta.has(key) ? '' : tag;
      });

      if (titleString.trim()) {
        html = html.replace(/<title>[\s\S]*?<\/title>/gi, '');
      }
      if (metaString.includes('name="description"')) {
        html = html.replace(/<meta name="description"[^>]*>/gi, '');
      }
      if (metaString.includes('property="og:title"')) {
        html = html.replace(/<meta property="og:title"[^>]*>/gi, '');
      }
      if (metaString.includes('property="og:description"')) {
        html = html.replace(/<meta property="og:description"[^>]*>/gi, '');
      }
      if (metaString.includes('property="og:url"')) {
        html = html.replace(/<meta property="og:url"[^>]*>/gi, '');
      } else {
        html = html.replace(
          /<meta property="og:url"[^>]*>/gi,
          `<meta property="og:url" content="${fullCanonicalUrl}" />`
        );
      }
      if (metaString.includes('name="twitter:title"')) {
        html = html.replace(/<meta name="twitter:title"[^>]*>/gi, '');
      }
      if (metaString.includes('name="twitter:description"')) {
        html = html.replace(/<meta name="twitter:description"[^>]*>/gi, '');
      }

      if (linkString.includes('rel="canonical"')) {
        html = html.replace(/<link rel="canonical"[^>]*>/gi, '');
      } else {
        html = html.replace(
          /<link rel="canonical"[^>]*>/gi,
          `<link rel="canonical" href="${fullCanonicalUrl}" />`
        );
      }
      html = html.replace(
        /<link rel="alternate" hreflang="pt-BR"[^>]*>/gi,
        `<link rel="alternate" hreflang="pt-BR" href="${linkString.match(/rel="canonical" href="([^"]+)"/)?.[1] || fullCanonicalUrl}" />`
      );

      const helmetTags = `
        ${titleString}
        ${metaString}
        ${linkString}
        ${scriptString}
      `;
      html = html.replace('</head>', `${helmetTags}\n  </head>`);
    }

    const outDir = path.join(__dirname, 'dist', routePath);
    const outFile = path.join(outDir, 'index.html');
    
    fs.mkdirSync(outDir, { recursive: true });
    html = completeSharingMetadata(html);
    fs.writeFileSync(outFile, html);
    const canonical = html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];
    if (canonical === fullCanonicalUrl) canonicalRoutes.add(routePath);
    
    console.log(`Prerendered ${url} -> ${outFile}`);
  }

  const sitemapUrls = allRoutes
    .filter((route) => canonicalRoutes.has(route) && !lowPriorityRoutes.includes(route) && !legacyArticleRoutes.has(route))
    .map((route) => {
      const normalizedRoute = route.endsWith('/') ? route : `${route}/`;
      let priority = '0.8';
      let changefreq = 'monthly';

      if (normalizedRoute === '/') {
        priority = '1.0';
        changefreq = 'weekly';
      } else if (['/branding/', '/sites/', '/seo-geo/', '/portfolio/', '/blog/', '/contato/'].includes(normalizedRoute)) {
        priority = '0.9';
        changefreq = 'weekly';
      } else if (normalizedRoute.startsWith('/solucoes/') || normalizedRoute.includes('indaiatuba') || normalizedRoute.includes('campinas')) {
        priority = '0.85';
        changefreq = 'monthly';
      } else if (normalizedRoute.startsWith('/blog/')) {
        priority = '0.75';
        changefreq = 'monthly';
      }

      const modified = articleDates.get(normalizedRoute) || (normalizedRoute === '/blog/' ? '2026-10-23' : null);
      return `  <url>\n    <loc>${SITE_URL}${normalizedRoute}</loc>\n${modified ? `    <lastmod>${modified}</lastmod>\n` : ''}    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`;

  fs.writeFileSync(path.join(__dirname, 'dist', 'sitemap.xml'), sitemapXml);
  fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemapXml);
  console.log('Sitemap.xml automatically updated with all strategic routes.');
  
  console.log('Prerendering completed.');
}

prerender().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});