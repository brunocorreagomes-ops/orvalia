import fs from 'fs';
import path from 'path';

const dirs = ['src/pages/Blog', 'src/pages'];

for (const dir of dirs) {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

  for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add prose-invert if not present
    if (content.includes('className="prose') && !content.includes('prose-invert')) {
      content = content.replace(/className="prose /g, 'className="prose prose-invert ');
    }
    
    // Fix text-black inside headers or prose manually if any
    content = content.replace(/text-gray-900/g, 'text-brand-text');
    
    fs.writeFileSync(filePath, content);
  }
}
console.log('Fixed prose-invert');
