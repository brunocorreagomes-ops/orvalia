import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_URL = 'https://orvalia.com.br';

const routesToPrerender = [
  '/',
  '/branding/',
  '/sites/',
  '/seo-geo/',
  '/portfolio/',
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

async function prerender() {
  console.log('Starting prerendering...');
  
  const serverEntryPath = path.resolve(__dirname, 'dist-server/entry-server.js');
  const { render } = await import(serverEntryPath);
  
  const templatePath = path.resolve(__dirname, 'dist/index.html');
  const template = fs.readFileSync(templatePath, 'utf-8');
  
  for (const url of routesToPrerender) {
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
    
    if (helmet) {
      const titleString = helmet.title ? helmet.title.toString() : '';
      const metaString = helmet.meta ? helmet.meta.toString() : '';
      const linkString = helmet.link ? helmet.link.toString() : '';
      const scriptString = helmet.script ? helmet.script.toString() : '';

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
        `<link rel="alternate" hreflang="pt-BR" href="${fullCanonicalUrl}" />`
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
    fs.writeFileSync(outFile, html);
    
    console.log(`Prerendered ${url} -> ${outFile}`);
  }

  const today = new Date().toISOString().split('T')[0];
  const sitemapUrls = routesToPrerender
    .filter((route) => !lowPriorityRoutes.includes(route))
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

      return `  <url>\n    <loc>${SITE_URL}${normalizedRoute}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`;

  fs.writeFileSync(path.join(__dirname, 'dist', 'sitemap.xml'), sitemapXml);
  fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemapXml);
  console.log('Sitemap.xml automatically updated with all strategic routes.');
  
  console.log('Prerendering completed.');
}

prerender().catch(console.error);