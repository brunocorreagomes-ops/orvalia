import fs from 'fs';
import path from 'path';

const captions = {
  "geo-generative-engine-optimization-buscas-ia": {
    url: "https://i.ibb.co/DfY9bnCR/04-o-que-e-geo-e-como-preparar-sua-marca.webp",
    text: "GEO: O futuro das buscas já começou"
  },
  "branding-indaiatuba": {
    url: "https://i.ibb.co/dsKJRZVN/05-branding-em-indaiatuba-como-construir-uma-marca-forte.webp",
    text: "O segredo para uma marca inesquecível"
  },
  "identidade-visual-precos": {
    url: "https://i.ibb.co/4ZfGQ7jV/06-quanto-custa-uma-identidade-visual-em-indaiatuba.webp",
    text: "Por que design barato afasta clientes de alto ticket"
  },
  "erros-marca-amadora": {
    url: "https://i.ibb.co/BH55gRZb/07-erros-que-fazem-sua-empresa-parecer-amadora-no-digital.webp",
    text: "Os erros que destroem a confiança na sua empresa"
  },
  "logo-vs-branding": {
    url: "https://i.ibb.co/XH858kk/08-diferenca-entre-logo-e-branding.webp",
    text: "Branding: Muito mais do que um logo bonito"
  },
  "posicionamento-premium": {
    url: "https://i.ibb.co/vvwvVyVp/09-como-posicionar-sua-empresa-como-premium.webp",
    text: "Posicionamento Premium: O guia para cobrar mais"
  },
  "site-profissional-conversao": {
    url: "https://i.ibb.co/jPfp3h9W/10-criacao-de-site-profissional-da-usabilidade-a-conversao.webp",
    text: "Transforme visitantes em clientes fiéis"
  },
  "instagram-estrategico": {
    url: "https://i.ibb.co/0pT5XqZW/11-instagram-para-empresas-da-construcao-a-geracao-de-valor.webp",
    text: "Instagram como máquina de autoridade"
  },
  "por-que-nao-cresce": {
    url: "https://i.ibb.co/N2Hd5sRC/12-por-que-sua-empresa-nao-cresce-no-digital.webp",
    text: "O verdadeiro motivo da estagnação no digital"
  },
  "identidade-profissionais-liberais": {
    url: "https://i.ibb.co/Y79hhg1n/13-identidade-visual-para-profissionais-liberais-em-indaiatuba.webp",
    text: "Identidade de Elite para Médicos e Advogados"
  },
  "guia-marca-forte": {
    url: "https://i.ibb.co/7tHDHJgT/14-como-construir-uma-marca-forte-no-digital-guia-completo.webp",
    text: "Construa uma marca magnética no digital"
  },
  "branding-estrategico-indaiatuba-campinas": {
    url: "https://i.ibb.co/nsKZ4K3f/15-branding-estrategico-o-caminho-para-o-posicionamento-premium.webp",
    text: "Crie desejo de compra através do Design"
  },
  "geo-inteligencia-artificial-empresas-sorocaba": {
    url: "https://i.ibb.co/HDzXkPh9/16-por-que-sua-empresa-em-sorocaba-ainda-nao-e-citada-pela-ia.webp",
    text: "As IAs estão ignorando a sua empresa?"
  },
  "arquitetura-sites-alta-performance-campinas": {
    url: "https://i.ibb.co/mrW1xwFV/01-arquitetura-de-sites-de-alto-padrao-em-campinas-e-rmc.webp",
    text: "Arquitetura invisível, resultados palpáveis"
  },
  "identidade-visual-profissionais-liberais-premium": {
    url: "https://i.ibb.co/KpYfYybp/02-arquitetura-da-autoridade-visual-para-profissionais-liberais.webp",
    text: "O visual que transmite extrema autoridade"
  },
  "rebranding-digital-b2b-sorocaba-itu-salto": {
    url: "https://i.ibb.co/mrr3PbMV/03-rebranding-digital-b2b-em-sorocaba-itu-e-salto.webp",
    text: "A evolução que atrai grandes contratos"
  },
  "percepcao-de-valor-estetica-premium-indaiatuba": {
    url: "https://i.ibb.co/WvZnn51p/17-percepcao-de-valor-estrategias-para-clinicas-de-estetica-premium.webp",
    text: "Luxo e Confiança para Clínicas Premium"
  }
};

const dir = 'src/pages/Blog';
const files = fs.readdirSync(dir).filter(f => f.startsWith('Article') && f.endsWith('.tsx'));

let indexContent = fs.readFileSync(path.join(dir, 'BlogIndex.tsx'), 'utf8');

for (const [id, info] of Object.entries(captions)) {
  // Check index
  const indexRegex = new RegExp(`id: "${id}"[\\s\\S]*?caption: "([^"]+)"`);
  const match = indexContent.match(indexRegex);
  if (!match || match[1] !== info.text) {
    console.log(`Mismatch in BlogIndex.tsx for ${id}: expected "${info.text}", found "${match ? match[1] : 'NONE'}"`);
  }

  // Check articles
  for (const file of files) {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    if (content.includes(info.url)) {
      const imgRegex = /<BlogImage[^>]*caption="([^"]+)"[^>]*\/>/;
      const imgMatch = content.match(imgRegex);
      if (!imgMatch || imgMatch[1] !== info.text) {
        console.log(`Mismatch in ${file} for url ${info.url}: expected "${info.text}", found "${imgMatch ? imgMatch[1] : 'NONE'}"`);
      }
    }
  }
}
