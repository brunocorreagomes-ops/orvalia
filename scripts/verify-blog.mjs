import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
const source = fs.readFileSync('src/data/articles.ts', 'utf8');
const articles = JSON.parse(source.split('export const articles: Article[] = ')[1].trim().replace(/;$/, ''));
const manifest = JSON.parse(fs.readFileSync('src/data/article-routes.json','utf8'));
assert.equal(articles.length, 22);
assert.deepEqual(manifest, articles.map(({slug, modified}) => ({slug, modified})));
const titles = new Set(), descriptions = new Set();
const sitemap = fs.readFileSync('dist/sitemap.xml', 'utf8');
const index = fs.readFileSync('dist/blog/index.html','utf8');
const canonicalPages = new Set(articles.map(a=>a.slug));
const decode = value => value.replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#x27;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>');
for (const article of articles) {
  const html = fs.readFileSync(path.join('dist', article.slug, 'index.html'),'utf8');
  const canonical = `https://orvalia.com.br${article.slug}`;
  assert.equal([...html.matchAll(/<h1\b/g)].length,1, article.id+' H1');
  assert.equal([...html.matchAll(/rel="canonical"/g)].length,1, article.id+' canonical count');
  assert(html.includes(`rel="canonical" href="${canonical}"`),article.id+' canonical');
  assert(index.includes(`href="${article.slug}"`),article.id+' discovery link');
  assert(sitemap.includes(`<loc>${canonical}</loc>`),article.id+' sitemap');
  assert.equal([...html.matchAll(/property="og:type"/g)].length,1);
  assert(/property="og:type" content="article"/.test(html));
  assert.equal([...html.matchAll(/name="description"/g)].length,1);
  assert.equal([...html.matchAll(/property="og:image"/g)].length,1);
  assert.equal([...html.matchAll(/name="twitter:image"/g)].length,1);
  assert(!html.includes('Av. Presidente Kennedy'),article.id+' unrelated legacy schema');
  const title=decode(html.match(/<title[^>]*>(.*?)<\/title>/s)[1]);
  assert(!titles.has(title),'duplicate title'); titles.add(title);
  assert(!descriptions.has(article.description),'duplicate description'); descriptions.add(article.description);
  const graphs=[...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap(match=>JSON.parse(match[1])['@graph'] || []);
  const post=graphs.find(item=>item['@type']==='BlogPosting');
  assert(post,article.id+' SSR schema'); assert.equal(post.headline,article.title); assert.equal(post.url,canonical);
  assert.equal(post.dateModified,article.modified); if (article.published) assert(post.datePublished<=post.dateModified); else assert.equal(post.datePublished,undefined);
  assert.equal(post.author.name,'Orvalia Studio');
  const faq=graphs.find(item=>item['@type']==='FAQPage');
  for(const item of faq.mainEntity){ assert(html.includes(item.name)); assert(html.includes(item.acceptedAnswer.text)); }
  assert(fs.existsSync('public/blog/capas/'+article.id+'.png'));
  const png=fs.readFileSync('public/blog/capas/'+article.id+'.png');
  assert.equal(png.readUInt32BE(16),1200);assert.equal(png.readUInt32BE(20),630);
  for(const section of article.sections) assert(html.includes(`id="${section.id}"`),article.id+' TOC target');
  for(const key of article.related) assert(articles.some(item=>item.id===key),article.id+' related');
  for(const match of html.matchAll(/href="([^"#]+)"/g)) {
    const href=decode(match[1]).split(/[?#]/)[0];
    if(!href.startsWith('/blog/') || href==='/blog/') continue;
    assert(canonicalPages.has(href),`${article.id}: broken article link ${href}`);
  }
}
for(const entry of manifest){
  const legacy=entry.slug.replace('/blog/','/');
  if(fs.existsSync(path.join('dist',legacy,'index.html'))){
    assert(!sitemap.includes(`<loc>https://orvalia.com.br${legacy}</loc>`),'duplicate sitemap alias');
    assert(fs.readFileSync(path.join('dist',legacy,'index.html'),'utf8').includes(`rel="canonical" href="https://orvalia.com.br${entry.slug}"`));
  }
}
console.log('PASS: 22 articles: SSR content, unique metadata, canonical URLs, schema, visible FAQ, TOC anchors, related links, covers and sitemap.');
