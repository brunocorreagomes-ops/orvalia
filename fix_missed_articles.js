import fs from 'fs';
import path from 'path';

const toFix = {
  "ArticleIdentidadeVisualPremium.tsx": {
    image: "/images/blog/02-arquitetura-da-autoridade-visual-para-profissionais-liberais.webp",
    alt: "Arquitetura da Autoridade Visual para Profissionais Liberais"
  },
  "ArticleGEO.tsx": {
    image: "/images/blog/16-por-que-sua-empresa-em-sorocaba-ainda-nao-e-citada-pela-ia.webp",
    alt: "Por que sua Empresa em Sorocaba ainda não é citada pela IA?"
  },
  "ArticleNewGEO.tsx": {
    image: "/images/blog/04-o-que-e-geo-e-como-preparar-sua-marca.webp",
    alt: "O que é GEO e Como Preparar sua Marca"
  }
};

const dir = 'src/pages/Blog';

for (const [file, data] of Object.entries(toFix)) {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes(data.image)) {
    console.log(`Already updated ${file}`);
    continue;
  }
  
  const imageMarkup = `
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16 w-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl"
        >
          <img
            src="${data.image}"
            alt="${data.alt}"
            loading="lazy"
            className="w-full aspect-video object-cover"
          />
        </motion.div>`;
        
  if (content.includes('</header>')) {
    content = content.replace('</header>', '</header>' + imageMarkup);
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  } else {
    console.log(`Could not find </header> in ${file}`);
  }
}
