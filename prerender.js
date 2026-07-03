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
  // Legado
  '/agencia-indaiatuba/',
  '/sites-estrategicos/',
  '/presenca-digital/'
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
      const helmetTags = `
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
      `;
      html = html.replace('</head>', `${helmetTags}</head>`);
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
