import fs from 'fs';
import path from 'path';

const dirs = ['src/components'];

for (const dir of dirs) {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

  for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Quick checks
    content = content.replace(/bg-\[#FAFAFA\]/g, 'bg-brand-bg text-brand-text');
    
    fs.writeFileSync(filePath, content);
  }
}
console.log('Fixed components');
