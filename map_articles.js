import fs from 'fs';
import path from 'path';

const imageMappings = {
  "Arquitetura de Sites de Alto Padrão em Campinas e RMC": "/images/blog/01-arquitetura-de-sites-de-alto-padrao-em-campinas-e-rmc.webp",
  "Arquitetura da Autoridade Visual para Profissionais Liberais": "/images/blog/02-arquitetura-da-autoridade-visual-para-profissionais-liberais.webp",
  "Rebranding Digital B2B em Sorocaba, Itu e Salto": "/images/blog/03-rebranding-digital-b2b-em-sorocaba-itu-e-salto.webp",
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

const dir = 'src/pages/Blog';
const files = fs.readdirSync(dir).filter(f => f.startsWith('Article') && f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let matchedKey = null;

  for (const key of Object.keys(imageMappings)) {
    if (content.includes(key)) {
      matchedKey = key;
      break;
    }
  }

  if (matchedKey) {
    console.log(`${file} matches "${matchedKey}"`);
    const imagePath = imageMappings[matchedKey];
    
    // Add image after header
    const imageMarkup = `
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16 w-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl"
        >
          <img
            src="${imagePath}"
            alt="${matchedKey}"
            loading="lazy"
            className="w-full aspect-video object-cover"
          />
        </motion.div>`;
        
    // Insert after </header>
    if (content.includes('</header>') && !content.includes(imagePath)) {
      content = content.replace('</header>', '</header>' + imageMarkup);
      fs.writeFileSync(filePath, content);
      console.log(`Updated ${file}`);
    } else {
      console.log(`Could not update ${file}`);
    }
  } else {
    console.log(`No match for ${file}`);
  }
}
