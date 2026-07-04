import fs from 'fs';
import path from 'path';

const fixLazy = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('loading="lazy"')) {
    if (!content.includes('decoding="async"')) {
      content = content.replace(/loading="lazy"/g, 'loading="lazy" decoding="async"');
      fs.writeFileSync(filePath, content);
      console.log(`Updated ${filePath}`);
    }
  }
};

const dir = 'src/pages/Blog';
const files = fs.readdirSync(dir).filter(f => f.startsWith('Article') && f.endsWith('.tsx'));
for (const file of files) {
  fixLazy(path.join(dir, file));
}
