const fs = require('fs');

let content = fs.readFileSync('src/components/BlogCTA.tsx', 'utf8');

content = content.replace(
  /Gostou dos insights\?<br \/>/g,
  'Gostou deste conteúdo?<br />'
);

content = content.replace(
  /Transforme sua marca em um ativo de vendas<\/span>/g,
  'Fale com a Orvalia sobre este tema</span>'
);

fs.writeFileSync('src/components/BlogCTA.tsx', content);
