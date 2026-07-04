import fs from 'fs';
import path from 'path';

const captionUpdates = {
  "geo-generative-engine-optimization-buscas-ia": "GEO: O futuro das buscas já começou",
  "branding-indaiatuba": "O segredo para uma marca inesquecível",
  "identidade-visual-precos": "Por que design barato afasta clientes de alto ticket",
  "erros-marca-amadora": "Os erros que destroem a confiança na sua empresa",
  "logo-vs-branding": "Branding: Muito mais do que um logo bonito",
  "posicionamento-premium": "Posicionamento Premium: O guia para cobrar mais",
  "site-profissional-conversao": "Transforme visitantes em clientes fiéis",
  "instagram-estrategico": "Instagram como máquina de autoridade",
  "por-que-nao-cresce": "O verdadeiro motivo da estagnação no digital",
  "identidade-profissionais-liberais": "Identidade de Elite para Médicos e Advogados",
  "guia-marca-forte": "Construa uma marca magnética no digital",
  "branding-estrategico-indaiatuba-campinas": "Crie desejo de compra através do Design",
  "geo-inteligencia-artificial-empresas-sorocaba": "As IAs estão ignorando a sua empresa?",
  "arquitetura-sites-alta-performance-campinas": "Arquitetura invisível, resultados palpáveis",
  "identidade-visual-profissionais-liberais-premium": "O visual que transmite extrema autoridade",
  "rebranding-digital-b2b-sorocaba-itu-salto": "A evolução que atrai grandes contratos",
  "percepcao-de-valor-estetica-premium-indaiatuba": "Luxo e Confiança para Clínicas Premium"
};

const urlToCaption = {
  "https://i.ibb.co/DfY9bnCR/04-o-que-e-geo-e-como-preparar-sua-marca.webp": "GEO: O futuro das buscas já começou",
  "https://i.ibb.co/dsKJRZVN/05-branding-em-indaiatuba-como-construir-uma-marca-forte.webp": "O segredo para uma marca inesquecível",
  "https://i.ibb.co/4ZfGQ7jV/06-quanto-custa-uma-identidade-visual-em-indaiatuba.webp": "Por que design barato afasta clientes de alto ticket",
  "https://i.ibb.co/BH55gRZb/07-erros-que-fazem-sua-empresa-parecer-amadora-no-digital.webp": "Os erros que destroem a confiança na sua empresa",
  "https://i.ibb.co/XH858kk/08-diferenca-entre-logo-e-branding.webp": "Branding: Muito mais do que um logo bonito",
  "https://i.ibb.co/vvwvVyVp/09-como-posicionar-sua-empresa-como-premium.webp": "Posicionamento Premium: O guia para cobrar mais",
  "https://i.ibb.co/jPfp3h9W/10-criacao-de-site-profissional-da-usabilidade-a-conversao.webp": "Transforme visitantes em clientes fiéis",
  "https://i.ibb.co/0pT5XqZW/11-instagram-para-empresas-da-construcao-a-geracao-de-valor.webp": "Instagram como máquina de autoridade",
  "https://i.ibb.co/N2Hd5sRC/12-por-que-sua-empresa-nao-cresce-no-digital.webp": "O verdadeiro motivo da estagnação no digital",
  "https://i.ibb.co/Y79hhg1n/13-identidade-visual-para-profissionais-liberais-em-indaiatuba.webp": "Identidade de Elite para Médicos e Advogados",
  "https://i.ibb.co/7tHDHJgT/14-como-construir-uma-marca-forte-no-digital-guia-completo.webp": "Construa uma marca magnética no digital",
  "https://i.ibb.co/nsKZ4K3f/15-branding-estrategico-o-caminho-para-o-posicionamento-premium.webp": "Crie desejo de compra através do Design",
  "https://i.ibb.co/HDzXkPh9/16-por-que-sua-empresa-em-sorocaba-ainda-nao-e-citada-pela-ia.webp": "As IAs estão ignorando a sua empresa?",
  "https://i.ibb.co/mrW1xwFV/01-arquitetura-de-sites-de-alto-padrao-em-campinas-e-rmc.webp": "Arquitetura invisível, resultados palpáveis",
  "https://i.ibb.co/KpYfYybp/02-arquitetura-da-autoridade-visual-para-profissionais-liberais.webp": "O visual que transmite extrema autoridade",
  "https://i.ibb.co/mrr3PbMV/03-rebranding-digital-b2b-em-sorocaba-itu-e-salto.webp": "A evolução que atrai grandes contratos",
  "https://i.ibb.co/WvZnn51p/17-percepcao-de-valor-estrategias-para-clinicas-de-estetica-premium.webp": "Luxo e Confiança para Clínicas Premium"
};

// 1. Update BlogIndex.tsx
let indexContent = fs.readFileSync('src/pages/Blog/BlogIndex.tsx', 'utf8');

for (const [id, caption] of Object.entries(captionUpdates)) {
  const regex = new RegExp(`(id: "${id}"[\\s\\S]*?caption: ")[^"]+(")`, 'g');
  indexContent = indexContent.replace(regex, `$1${caption}$2`);
}
fs.writeFileSync('src/pages/Blog/BlogIndex.tsx', indexContent);

// 2. Update Articles
const dir = 'src/pages/Blog';
const files = fs.readdirSync(dir).filter(f => f.startsWith('Article') && f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  for (const [url, caption] of Object.entries(urlToCaption)) {
    if (content.includes(url)) {
      const regex = new RegExp(`(<BlogImage src="${url.replace(/\//g, '\\/')}" alt="[^"]+" caption=")[^"]+(" \\/>)`, 'g');
      if (content.match(regex)) {
        content = content.replace(regex, `$1${caption}$2`);
        changed = true;
      }
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content);
  }
}
