import fs from 'fs';

let content = fs.readFileSync('src/pages/Blog/BlogIndex.tsx', 'utf8');

const imageMappings = {
  "Arquitetura de Sites de Alto Padrão": "/images/blog/01-arquitetura-de-sites-de-alto-padrao-em-campinas-e-rmc.webp",
  "Arquitetura da Autoridade Visual": "/images/blog/02-arquitetura-da-autoridade-visual-para-profissionais-liberais.webp",
  "Rebranding Digital B2B": "/images/blog/03-rebranding-digital-b2b-em-sorocaba-itu-e-salto.webp",
  "O que é GEO": "/images/blog/04-o-que-e-geo-e-como-preparar-sua-marca.webp",
  "Branding em Indaiatuba:": "/images/blog/05-branding-em-indaiatuba-como-construir-uma-marca-forte.webp",
  "Quanto custa uma identidade visual": "/images/blog/06-quanto-custa-uma-identidade-visual-em-indaiatuba.webp",
  "Erros que fazem sua empresa parecer amadora": "/images/blog/07-erros-que-fazem-sua-empresa-parecer-amadora-no-digital.webp",
  "Diferença entre logo e branding": "/images/blog/08-diferenca-entre-logo-e-branding.webp",
  "Como posicionar sua empresa como premium": "/images/blog/09-como-posicionar-sua-empresa-como-premium.webp",
  "Criação de site profissional": "/images/blog/10-criacao-de-site-profissional-da-usabilidade-a-conversao.webp",
  "Instagram para empresas": "/images/blog/11-instagram-para-empresas-da-construcao-a-geracao-de-valor.webp",
  "Por que sua empresa não cresce": "/images/blog/12-por-que-sua-empresa-nao-cresce-no-digital.webp",
  "Identidade visual para profissionais liberais em Indaiatuba": "/images/blog/13-identidade-visual-para-profissionais-liberais-em-indaiatuba.webp",
  "Como construir uma marca forte no digital": "/images/blog/14-como-construir-uma-marca-forte-no-digital-guia-completo.webp",
  "Branding Estratégico:": "/images/blog/15-branding-estrategico-o-caminho-para-o-posicionamento-premium.webp",
  "Por que sua Empresa em Sorocaba": "/images/blog/16-por-que-sua-empresa-em-sorocaba-ainda-nao-e-citada-pela-ia.webp",
  "Percepção de Valor:": "/images/blog/17-percepcao-de-valor-estrategias-para-clinicas-de-estetica-premium.webp"
};

for (const [key, imagePath] of Object.entries(imageMappings)) {
  const regex = new RegExp(`(title:\\s*"${key}[^"]*",\\s*excerpt:\\s*"[^"]*",\\s*image:\\s*)"[^"]*"`);
  content = content.replace(regex, `$1"${imagePath}"`);
}

// Change aspect ratio
content = content.replace('aspect-[4/3]', 'aspect-video');

fs.writeFileSync('src/pages/Blog/BlogIndex.tsx', content);
console.log('BlogIndex updated!');
