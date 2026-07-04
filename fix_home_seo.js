import fs from 'fs';

let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

content = content.replace(
  'title="Orvalia Studio | Branding e Sites em Indaiatuba"',
  'title="Orvalia Studio | Branding, Sites e Presença Digital em Indaiatuba"'
);

content = content.replace(
  'description="Agência de posicionamento digital, branding premium e criação de sites focados em conversão em Indaiatuba e região."',
  'description="Agência de branding em Indaiatuba especializada em identidade visual, sites premium, SEO local e comunicação estratégica para negócios que querem elevar sua presença digital."'
);

fs.writeFileSync('src/pages/Home.tsx', content);
console.log('Fixed Home.tsx SEO');
