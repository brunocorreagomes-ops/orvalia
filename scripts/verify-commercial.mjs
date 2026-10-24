import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
const root = fs.readFileSync('dist/index.html', 'utf8');
const source = fs.readFileSync('src/data/projects.ts', 'utf8');
const projects = JSON.parse(source.split('export const projects: Project[] = ')[1].trim().replace(/;$/, ''));
const decode = value => value.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/<!--.*?-->/gs, '');
const scripts = html => [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap(match => { const json=JSON.parse(match[1]); return json['@graph'] || [json]; });
const graphs = scripts(root);
assert.equal(graphs.filter(item => item['@id'] === 'https://orvalia.com.br/#organization').length, 1, 'Home has one authoritative organization');
const faqs = graphs.filter(item => item['@type'] === 'FAQPage');
assert.equal(faqs.length, 1, 'One home FAQ source');
assert.equal(faqs[0].mainEntity.length, 6, 'Six practical contact questions');
const details = [...root.matchAll(/<details\b[^>]*>([\s\S]*?)<\/details>/g)].map(match => decode(match[1].replace(/<[^>]*>/g, '')));
for (const faq of faqs[0].mainEntity) assert(details.some(text => text.includes(faq.name) && text.includes(faq.acceptedAnswer.text)), `Visible FAQ matches schema: ${faq.name}`);
assert(root.includes('Identidade visual e criação de sites em Indaiatuba e Campinas'));
assert(root.includes('Bruno analisa e responde pelo e-mail informado.'));
assert(!root.includes('Av. Presidente Kennedy') && !root.includes('contato@orvalia.com.br'), 'No unconfirmed address or mailbox');
const sitemap = fs.readFileSync('dist/sitemap.xml', 'utf8');
const canonicals = new Set();
for (const project of projects) {
  const route = `/portfolio/${project.slug}/`;
  const canonical = `https://orvalia.com.br${route}`;
  const html = fs.readFileSync(path.join('dist', route, 'index.html'), 'utf8');
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1, `${project.slug}: one H1`);
  const h1 = decode(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)[1].replace(/<[^>]*>/g, ''));
  assert.equal(h1, project.client);
  assert(html.includes(`rel="canonical" href="${canonical}"`));
  assert(!canonicals.has(canonical)); canonicals.add(canonical);
  assert(sitemap.includes(`<loc>${canonical}</loc>`), `${project.slug}: sitemap`);
  assert(root.includes(`href="${route}"`), `${project.slug}: discoverable from home`);
  assert(fs.existsSync(path.join('public', project.image)), `${project.slug}: real image exists`);
  assert(html.includes(project.goal) && html.includes(project.approach));
  for (const item of project.deliverables) assert(decode(html).includes(item));
  assert(scripts(html).some(item => item['@type'] === 'CreativeWork' && item.url === canonical));
}
console.log('PASS: six unique, discoverable project pages; home FAQ and organization match visible content; contact expectations are explicit.');

const sites = fs.readFileSync('dist/sites/index.html', 'utf8');
assert(sites.includes('<title data-rh="true">Criação de sites em Indaiatuba e Campinas | Orvalia Studio</title>'));
assert(!sites.includes('ranquear no Google desde o primeiro dia') && !sites.includes('concorrente avança'));
for (const href of ['/branding/', '/sites/', '/seo-geo/']) assert(root.includes(`href="${href}"`));
assert(root.indexOf('id="formas-trabalhar"') < root.indexOf('id="cases"'), 'Service explanation precedes proof');
assert(root.includes('href="/blog/quanto-custa-site-indaiatuba/"') && root.includes('href="/blog/identidade-visual-precos/"'));
assert(!root.includes('Vim%20pela%20p%C3%A1gina%20%2F'), 'No raw route in WhatsApp greeting');
const cost = fs.readFileSync('dist/blog/quanto-custa-site-indaiatuba/index.html','utf8');
assert(cost.includes('A Orvalia define o investimento em proposta, sem uma tabela pública.'));
for (const slug of ['dario-eletricidade','quinta-de-caraiva']) assert(cost.includes(`href="/portfolio/${slug}/"`));
for (const route of ['index.html','sites/index.html','contato/index.html','blog/index.html']) {
 const html = fs.readFileSync(path.join('dist',route),'utf8');
 assert(html.includes('footer-contact') && html.includes('Indaiatuba, SP') && html.includes('mailto:orvaliastudio@gmail.com'));
 assert(!html.includes('https://i.ibb.co'), route + ': primary content images are local');
}
console.log('PASS: service clarity, contextual budget links, factual footer and readable WhatsApp greeting.');

const social = fs.readFileSync('dist/redes-sociais/index.html','utf8');
assert(root.includes('href="/redes-sociais/"'), 'Social service discoverable from home');
assert(sitemap.includes('<loc>https://orvalia.com.br/redes-sociais/</loc>'));
assert(social.includes('rel="canonical" href="https://orvalia.com.br/redes-sociais/"'));
for (const text of ['Análise da presença digital','Posts estáticos para o feed','Vídeos para stories','Quantidade de peças, formatos e frequência de entrega.']) assert(social.includes(text), text);
assert(scripts(social).some(item=>item['@type']==='Service' && item.url==='https://orvalia.com.br/redes-sociais/'));
for (const item of scripts(social).find(item=>item['@type']==='FAQPage').mainEntity) assert(decode(social).includes(item.acceptedAnswer.text));
assert(fs.readFileSync('dist/contato/index.html','utf8').includes('value="Presença digital e redes sociais"'));
console.log('PASS: presence analysis and social content service, explicit scope, visible FAQ and inquiry option.');
