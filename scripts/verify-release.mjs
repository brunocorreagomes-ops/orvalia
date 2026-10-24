import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
for (const route of ['plano-essencial', 'plano-profissional', 'plano-evolucao']) {
  const html = fs.readFileSync(`dist/${route}/index.html`, 'utf8');
  assert(!/R\$\s*[\d.]+/.test(html), `Commercial price still present: ${route}`);
}
for (const route of ['clientes/elife/index.html', 'clientes/elife/cronograma.html', 'proposta/gss/index.html']) {
  const html = fs.readFileSync(path.join('dist', route), 'utf8');
  assert(html.includes('movido para acesso privado'), `Private access placeholder missing: ${route}`);
  assert(html.includes('noindex'), `Index protection missing: ${route}`);
  assert(html.length < 8000, `Unexpected content in private placeholder: ${route}`);
}
for (const directory of ['dist/clientes', 'dist/proposta']) {
  const files = fs.readdirSync(directory, { recursive: true });
  assert(!files.some(file => /\.(pdf|mp3|png|jpe?g|svg|webp)$/i.test(file)), 'Client originals remain in public build');
}
console.log('PASS: commercial prices removed; client routes contain private-access notices and no original documents or media.');
