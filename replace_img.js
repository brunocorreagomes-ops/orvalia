import fs from 'fs';
import path from 'path';

const dir = 'src/pages/Blog';
const files = fs.readdirSync(dir).filter(f => f.startsWith('Article') && f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // We want to add the import if it's not there
  if (!content.includes('BlogImage')) {
    // Add import after the last import
    const importMatch = content.match(/import .*\n/g);
    if (importMatch) {
      const lastImport = importMatch[importMatch.length - 1];
      content = content.replace(lastImport, lastImport + 'import BlogImage from "../../components/BlogImage";\n');
    }
  }

  // Find all <img ... /> and replace them
  // A regex that matches <img ... /> spanning multiple lines
  const imgRegex = /<img[^>]+src=(["'])([^"']+)\1[^>]*alt=(["'])([^"']+)\3[^>]*\/>/gs;
  
  // also handle some cases where alt comes before src
  const imgRegex2 = /<img[^>]*\/>/gs;

  content = content.replace(imgRegex2, (match) => {
    // extract src and alt
    const srcMatch = match.match(/src=(["'])([^"']+)\1/);
    const altMatch = match.match(/alt=(["'])([^"']+)\1/);
    
    if (srcMatch && altMatch) {
      return `<BlogImage src="${srcMatch[2]}" alt="${altMatch[2]}" />`;
    }
    return match; // If we couldn't parse it, leave it alone
  });

  fs.writeFileSync(filePath, content);
  console.log(`Updated ${filePath}`);
}
