import fs from 'fs';
import path from 'path';

const addFallback = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes('onError={')) {
    content = content.replace(/<img([^>]*)>/g, (match, p1) => {
      // Don't add to images that are not blog related, but here all imgs are blog covers
      if (p1.includes('loading="lazy"')) {
         return `<img${p1} onError={(e) => { e.currentTarget.style.opacity = '0'; }} />`;
      }
      return match;
    });
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  }
};

addFallback('src/pages/Blog/BlogIndex.tsx');

const dir = 'src/pages/Blog';
const files = fs.readdirSync(dir).filter(f => f.startsWith('Article') && f.endsWith('.tsx'));
for (const file of files) {
  addFallback(path.join(dir, file));
}
