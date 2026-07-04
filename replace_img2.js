import fs from 'fs';
import path from 'path';

const dir = 'src/pages/Blog';
const files = fs.readdirSync(dir).filter(f => f.startsWith('Article') && f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace block from <img to />
  content = content.replace(/<img[\s\S]*?\/>/g, (match) => {
    // If it's a component we've already replaced, or has something we want to keep
    const srcMatch = match.match(/src=(["'])([^"']+)\1/);
    const altMatch = match.match(/alt=(["'])([^"']+)\1/);
    
    if (srcMatch && altMatch) {
      return `<BlogImage src="${srcMatch[2]}" alt="${altMatch[2]}" />`;
    }
    return match;
  });

  fs.writeFileSync(filePath, content);
  console.log(`Updated ${filePath}`);
}
