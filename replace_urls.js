import fs from 'fs';
import path from 'path';

const urlMap = {
  "/images/blog/07-erros-que-fazem-sua-empresa-parecer-amadora-no-digital.webp": "https://i.ibb.co/BH55gRZb/07-erros-que-fazem-sua-empresa-parecer-amadora-no-digital.webp",
  "/images/blog/05-branding-em-indaiatuba-como-construir-uma-marca-forte.webp": "https://i.ibb.co/dsKJRZVN/05-branding-em-indaiatuba-como-construir-uma-marca-forte.webp",
  "/images/blog/06-quanto-custa-uma-identidade-visual-em-indaiatuba.webp": "https://i.ibb.co/4ZfGQ7jV/06-quanto-custa-uma-identidade-visual-em-indaiatuba.webp",
  "/images/blog/12-por-que-sua-empresa-nao-cresce-no-digital.webp": "https://i.ibb.co/N2Hd5sRC/12-por-que-sua-empresa-nao-cresce-no-digital.webp",
  "/images/blog/16-por-que-sua-empresa-em-sorocaba-ainda-nao-e-citada-pela-ia.webp": "https://i.ibb.co/HDzXkPh9/16-por-que-sua-empresa-em-sorocaba-ainda-nao-e-citada-pela-ia.webp",
  "/images/blog/17-percepcao-de-valor-estrategias-para-clinicas-de-estetica-premium.webp": "https://i.ibb.co/WvZnn51p/17-percepcao-de-valor-estrategias-para-clinicas-de-estetica-premium.webp",
  "/images/blog/10-criacao-de-site-profissional-da-usabilidade-a-conversao.webp": "https://i.ibb.co/jPfp3h9W/10-criacao-de-site-profissional-da-usabilidade-a-conversao.webp",
  "/images/blog/01-arquitetura-de-sites-de-alto-padrao-em-campinas-e-rmc.webp": "https://i.ibb.co/mrW1xwFV/01-arquitetura-de-sites-de-alto-padrao-em-campinas-e-rmc.webp",
  "/images/blog/04-o-que-e-geo-e-como-preparar-sua-marca.webp": "https://i.ibb.co/DfY9bnCR/04-o-que-e-geo-e-como-preparar-sua-marca.webp",
  "/images/blog/11-instagram-para-empresas-da-construcao-a-geracao-de-valor.webp": "https://i.ibb.co/0pT5XqZW/11-instagram-para-empresas-da-construcao-a-geracao-de-valor.webp",
  "/images/blog/02-arquitetura-da-autoridade-visual-para-profissionais-liberais.webp": "https://i.ibb.co/KpYfYybp/02-arquitetura-da-autoridade-visual-para-profissionais-liberais.webp",
  "/images/blog/15-branding-estrategico-o-caminho-para-o-posicionamento-premium.webp": "https://i.ibb.co/nsKZ4K3f/15-branding-estrategico-o-caminho-para-o-posicionamento-premium.webp",
  "/images/blog/08-diferenca-entre-logo-e-branding.webp": "https://i.ibb.co/XH858kk/08-diferenca-entre-logo-e-branding.webp",
  "/images/blog/13-identidade-visual-para-profissionais-liberais-em-indaiatuba.webp": "https://i.ibb.co/Y79hhg1n/13-identidade-visual-para-profissionais-liberais-em-indaiatuba.webp",
  "/images/blog/09-como-posicionar-sua-empresa-como-premium.webp": "https://i.ibb.co/vvwvVyVp/09-como-posicionar-sua-empresa-como-premium.webp",
  "/images/blog/14-como-construir-uma-marca-forte-no-digital-guia-completo.webp": "https://i.ibb.co/7tHDHJgT/14-como-construir-uma-marca-forte-no-digital-guia-completo.webp",
  "/images/blog/03-rebranding-digital-b2b-em-sorocaba-itu-e-salto.webp": "https://i.ibb.co/mrr3PbMV/03-rebranding-digital-b2b-em-sorocaba-itu-e-salto.webp"
};

const dir = 'src/pages/Blog';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  for (const [oldUrl, newUrl] of Object.entries(urlMap)) {
    if (content.includes(oldUrl)) {
      content = content.replaceAll(oldUrl, newUrl);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  }
}
