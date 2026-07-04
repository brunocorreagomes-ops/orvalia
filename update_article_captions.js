import fs from 'fs';
import path from 'path';

const urlToCaption = {
  "https://i.ibb.co/DfY9bnCR/04-o-que-e-geo-e-como-preparar-sua-marca.webp": "Domine as buscas por IA",
  "https://i.ibb.co/dsKJRZVN/05-branding-em-indaiatuba-como-construir-uma-marca-forte.webp": "Destaque sua marca",
  "https://i.ibb.co/4ZfGQ7jV/06-quanto-custa-uma-identidade-visual-em-indaiatuba.webp": "Valor além do design",
  "https://i.ibb.co/BH55gRZb/07-erros-que-fazem-sua-empresa-parecer-amadora-no-digital.webp": "Evite o amadorismo",
  "https://i.ibb.co/XH858kk/08-diferenca-entre-logo-e-branding.webp": "Mais que um logo",
  "https://i.ibb.co/vvwvVyVp/09-como-posicionar-sua-empresa-como-premium.webp": "Posicionamento Premium",
  "https://i.ibb.co/jPfp3h9W/10-criacao-de-site-profissional-da-usabilidade-a-conversao.webp": "Sites que convertem",
  "https://i.ibb.co/0pT5XqZW/11-instagram-para-empresas-da-construcao-a-geracao-de-valor.webp": "Autoridade no Instagram",
  "https://i.ibb.co/N2Hd5sRC/12-por-que-sua-empresa-nao-cresce-no-digital.webp": "Estratégia de crescimento",
  "https://i.ibb.co/Y79hhg1n/13-identidade-visual-para-profissionais-liberais-em-indaiatuba.webp": "Para médicos e advogados",
  "https://i.ibb.co/7tHDHJgT/14-como-construir-uma-marca-forte-no-digital-guia-completo.webp": "O guia definitivo",
  "https://i.ibb.co/nsKZ4K3f/15-branding-estrategico-o-caminho-para-o-posicionamento-premium.webp": "Crie desejo de compra",
  "https://i.ibb.co/HDzXkPh9/16-por-que-sua-empresa-em-sorocaba-ainda-nao-e-citada-pela-ia.webp": "Sua marca na IA",
  "https://i.ibb.co/mrW1xwFV/01-arquitetura-de-sites-de-alto-padrao-em-campinas-e-rmc.webp": "Arquitetura de performance",
  "https://i.ibb.co/KpYfYybp/02-arquitetura-da-autoridade-visual-para-profissionais-liberais.webp": "Autoridade visual",
  "https://i.ibb.co/mrr3PbMV/03-rebranding-digital-b2b-em-sorocaba-itu-e-salto.webp": "Rebranding B2B de sucesso",
  "https://i.ibb.co/WvZnn51p/17-percepcao-de-valor-estrategias-para-clinicas-de-estetica-premium.webp": "Clínicas premium"
};

const dir = 'src/pages/Blog';
const files = fs.readdirSync(dir).filter(f => f.startsWith('Article') && f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  for (const [url, caption] of Object.entries(urlToCaption)) {
    if (content.includes(url)) {
      // Find the BlogImage tag containing this URL
      const regex = new RegExp(`<BlogImage src="${url.replace(/\//g, '\\/')}" alt="([^"]+)" \\/>`, 'g');
      if (content.match(regex)) {
        content = content.replace(regex, `<BlogImage src="${url}" alt="$1" caption="${caption}" />`);
        changed = true;
      }
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  }
}
