import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
  '/branding-estrategico-indaiatuba-campinas/',
  '/branding-para-clinicas-campinas-indaiatuba/',
  '/posicionamento-digital-advogados-indaiatuba/',
  '/design-estrategico-arquitetura-itu-jundiai/',
  '/geo-inteligencia-artificial-empresas-sorocaba/',
  '/blog/geo-generative-engine-optimization-buscas-ia/',
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

async function prerender() {
  console.log('Starting prerendering...');
  
  // 1. Get the SSR render function
  const serverEntryPath = path.resolve(__dirname, 'dist-server/entry-server.js');
  const { render } = await import(serverEntryPath);
  
  // 2. Read index.html from dist
  const templatePath = path.resolve(__dirname, 'dist/index.html');
  const template = fs.readFileSync(templatePath, 'utf-8');
  
  // 3. Render each route
  for (const url of routesToPrerender) {
    const context = {};
    const appHtml = render(url, context);
    
    // Extracted helmet data
    const { helmet } = context;
    
    let html = template.replace(
      `<div id="root"></div>`,
      `<div id="root">${appHtml}</div>`
    );
    
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
      if (linkString.includes('rel="canonical"')) {
        html = html.replace(/<link rel="canonical"[^>]*>/gi, '');
      }
      if (metaString.includes('property="og:title"')) {
        html = html.replace(/<meta property="og:title"[^>]*>/gi, '');
      }
      if (metaString.includes('property="og:description"')) {
        html = html.replace(/<meta property="og:description"[^>]*>/gi, '');
      }
      if (metaString.includes('property="og:url"')) {
        html = html.replace(/<meta property="og:url"[^>]*>/gi, '');
      }
      if (metaString.includes('name="twitter:title"')) {
        html = html.replace(/<meta name="twitter:title"[^>]*>/gi, '');
      }
      if (metaString.includes('name="twitter:description"')) {
        html = html.replace(/<meta name="twitter:description"[^>]*>/gi, '');
      }

      const helmetTags = `
        ${titleString}
        ${metaString}
        ${linkString}
        ${scriptString}
      `;
      html = html.replace('</head>', `${helmetTags}\n  </head>`);
    }

    // Determine output file path
    const routePath = url.endsWith('/') ? url : `${url}/`;
    const outDir = path.join(__dirname, 'dist', routePath);
    const outFile = path.join(outDir, 'index.html');
    
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(outFile, html);
    
    console.log(`Prerendered ${url} -> ${outFile}`);
  }
  
  console.log('Prerendering completed.');
}

prerender().catch(console.error);
