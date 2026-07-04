import fs from 'fs';

const captions = {
  "geo-generative-engine-optimization-buscas-ia": "Domine as buscas por IA",
  "branding-indaiatuba": "Destaque sua marca",
  "identidade-visual-precos": "Valor além do design",
  "erros-marca-amadora": "Evite o amadorismo",
  "logo-vs-branding": "Mais que um logo",
  "posicionamento-premium": "Posicionamento Premium",
  "site-profissional-conversao": "Sites que convertem",
  "instagram-estrategico": "Autoridade no Instagram",
  "por-que-nao-cresce": "Estratégia de crescimento",
  "identidade-profissionais-liberais": "Para médicos e advogados",
  "guia-marca-forte": "O guia definitivo",
  "branding-estrategico-indaiatuba-campinas": "Crie desejo de compra",
  "geo-inteligencia-artificial-empresas-sorocaba": "Sua marca na IA",
  "arquitetura-sites-alta-performance-campinas": "Arquitetura de performance",
  "identidade-visual-profissionais-liberais-premium": "Autoridade visual",
  "rebranding-digital-b2b-sorocaba-itu-salto": "Rebranding B2B de sucesso",
  "percepcao-de-valor-estetica-premium-indaiatuba": "Clínicas premium"
};

let content = fs.readFileSync('src/pages/Blog/BlogIndex.tsx', 'utf8');

for (const [id, caption] of Object.entries(captions)) {
  const idMatch = new RegExp(`id: "${id}",([\\s\\S]*?)date: "([^"]+)"(,\\n\\s*slug: "([^"]+)")?`, 'g');
  content = content.replace(idMatch, (match, middle, date, slugGroup, slug) => {
    if (slug) {
      if (!match.includes('caption:')) {
        return `id: "${id}",${middle}date: "${date}",\n    slug: "${slug}",\n    caption: "${caption}"`;
      }
      return match;
    } else {
      if (!match.includes('caption:')) {
        return `id: "${id}",${middle}date: "${date}",\n    caption: "${caption}"`;
      }
      return match;
    }
  });
}

fs.writeFileSync('src/pages/Blog/BlogIndex.tsx', content);
