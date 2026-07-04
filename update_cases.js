import fs from 'fs';

const targetCases = {
  "sites-para-medicos-indaiatuba": {
    client: "RYNA HAYASHI",
    segment: "Psicologia • Clínica de Alto Padrão",
    image: "https://i.ibb.co/S7733Rfs/ryna-hayashi.webp",
    context: "Falta de presença estruturada e dependência de indicações físicas locais.",
    solution: "Construção de uma presença digital sensível, técnica e premium para fortalecer autoridade clínica.",
    metric: "Psicologia com posicionamento mais acolhedor e sofisticado"
  },
  "landing-pages-indaiatuba": {
    client: "BETH OLMEDA",
    segment: "Mentoria • Marca Pessoal & Estética",
    image: "https://i.ibb.co/fYJHdnnM/beth-2.jpg",
    context: "Posicionamento digital desatualizado e falta de clareza na oferta de serviços.",
    solution: "Redesign de marca premium, nova narrativa e Landing Page estratégica de alta conversão.",
    metric: "Estética facial com presença mais premium"
  },
  "seo-indaiatuba": {
    client: "DARIO ELETRICIDADE",
    segment: "Serviços • Engenharia Elétrica Local",
    image: "https://i.ibb.co/h0zgcXS/darioeletricidadesitemobile.png",
    context: "Baixa presença orgânica no Google frente a concorrentes na cidade.",
    solution: "Reposicionamento digital para apresentar serviços industriais com mais clareza, autoridade e objetividade.",
    metric: "Serviço técnico com comunicação mais confiável"
  },
  "criacao-de-sites-indaiatuba": {
    client: "KNJ TUR",
    segment: "Interface • Turismo Corporativo",
    image: "https://i.ibb.co/S7W7szP4/Gemini-Generated-Image-oyd0rboyd0rboyd0.png",
    context: "Identidade visual desatualizada que não representava a solidez do grupo.",
    solution: "Reorganização visual e estratégica para comunicar segurança, experiência e profissionalismo no planejamento de viagens.",
    metric: "Turismo com presença mais confiável e global"
  }
};

let content = fs.readFileSync('src/data/marketingPages.ts', 'utf8');

for (const [slug, data] of Object.entries(targetCases)) {
  const pageRegex = new RegExp(`(slug:\\s*"${slug}"[\\s\\S]*?relatedCase:\\s*{)[\\s\\S]*?(}\\s*})`, 'g');
  
  const replacement = `$1
      client: "${data.client}",
      segment: "${data.segment}",
      context: "${data.context}",
      solution: "${data.solution}",
      metric: "${data.metric}",
      image: "${data.image}"
    $2`;
    
  content = content.replace(pageRegex, replacement);
}

fs.writeFileSync('src/data/marketingPages.ts', content);
