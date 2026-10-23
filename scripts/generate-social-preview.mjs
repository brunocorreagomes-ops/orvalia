/** Reuses the official vector logo; requires sharp (local or primary runtime). */
import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const sharp = require(require.resolve('sharp', { paths: [process.env.CODEX_PRIMARY_RUNTIME_NODE_MODULES || path.resolve('node_modules')] }));
const source = await fs.readFile('src/components/OrvaliaLogo.tsx', 'utf8');
const logo = source.match(/<g fill=\{textColor\}>([\s\S]*?)<\/g>/)[1]
  .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
  .replace(/\{textColor\}/g, '"#080A0C"').replace(/\{cyanColor\}/g, '"#009E99"')
  .replace(/\r/g, '').replace(/[ \t]+\n/g, '\n')
  .replace(/strokeWidth=/g,'stroke-width=').replace(/strokeLinecap=/g,'stroke-linecap=');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="#E9E8E3"/>
<svg x="44" y="37" width="372" height="112" viewBox="0 0 530.69 160"><g fill="#080A0C">${logo}</g></svg>
<text x="1136" y="88" text-anchor="end" font-family="DejaVu Sans,sans-serif" font-size="12" letter-spacing="2.5" fill="#3F4A47">DIGITAL VALUE STUDIO</text>
<text x="64" y="267" font-family="DejaVu Sans,sans-serif" font-size="64" letter-spacing="-2.5" fill="#080A0C">Seu negócio vale</text>
<text x="64" y="349" font-family="DejaVu Serif,serif" font-style="italic" font-size="61" letter-spacing="-2.3" fill="#596B62">mais do que parece.</text>
<g fill="none" stroke="#B1BFB4" stroke-width="1"><path d="M1015 175V425M880 300H1150"/><path d="M890 216L980 253V346L890 380Z" fill="#D9DED2"/><path d="M1140 216L1050 253V346L1140 380Z" fill="#D2DCD1"/></g>
<circle cx="1015" cy="300" r="24" fill="#009E99" opacity=".10"/><circle cx="1015" cy="300" r="9" fill="#009E99"/>
<path d="M64 483H1136" stroke="#B7C1B9"/>
<text x="64" y="529" font-family="DejaVu Sans,sans-serif" font-size="14" letter-spacing="2" fill="#263A32">ESTRATÉGIA DE MARCA · BRANDING · SITES</text>
<text x="64" y="575" font-family="DejaVu Sans,sans-serif" font-size="14" fill="#596B62">Indaiatuba · Campinas · Brasil</text>
<text x="1136" y="575" text-anchor="end" font-family="DejaVu Sans,sans-serif" font-size="16" fill="#080A0C">orvalia.com.br</text>
</svg>`;
await fs.mkdir('public/social',{recursive:true});
await fs.writeFile('public/social/orvalia-preview-v1.svg',svg);
await sharp(Buffer.from(svg)).flatten({background:'#E9E8E3'}).jpeg({quality:90,mozjpeg:true}).toFile('public/social/orvalia-preview-v1.jpg');
const logoSVG=`<svg xmlns="http://www.w3.org/2000/svg" width="531" height="160" viewBox="0 0 530.69 160"><rect width="531" height="160" fill="#E9E8E3"/><g fill="#080A0C">${logo}</g></svg>`;
await sharp(Buffer.from(logoSVG)).png().toFile('public/logo.png');
console.log('Social cover: 1200 × 630 JPEG; official vector logo exported.');
