import fs from 'fs';
import path from 'path';

const fixFallback = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('/ onError={')) {
    content = content.replace(/\/ onError=\{/g, 'onError={');
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${filePath}`);
  }
};

fixFallback('src/pages/Blog/BlogIndex.tsx');

const dir = 'src/pages/Blog';
const files = fs.readdirSync(dir).filter(f => f.startsWith('Article') && f.endsWith('.tsx'));
for (const file of files) {
  fixFallback(path.join(dir, file));
}
