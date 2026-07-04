import fs from 'fs';
const filePath = 'src/components/Hero.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Update section class
content = content.replace(
  'pt-24 pb-12 md:pt-28 overflow-hidden',
  'pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden'
);

fs.writeFileSync(filePath, content);
console.log('Padding updated');
