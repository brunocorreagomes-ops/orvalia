import fs from 'fs';
import path from 'path';

const dir = 'src/pages/Blog';
const files = fs.readdirSync(dir).filter(f => f.startsWith('Article') && f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Basic replacements for dark mode
  content = content.replace(/bg-\[#FAFAFA\]/g, 'bg-brand-bg text-brand-text');
  
  // Replace text colors
  content = content.replace(/text-black/g, 'text-brand-text');
  content = content.replace(/text-gray-900/g, 'text-brand-text');
  content = content.replace(/text-gray-800/g, 'text-brand-text');
  content = content.replace(/text-gray-700/g, 'text-brand-secondary');
  content = content.replace(/text-gray-600/g, 'text-brand-secondary');
  content = content.replace(/text-gray-500/g, 'text-brand-secondary');
  content = content.replace(/text-gray-400/g, 'text-brand-secondary');
  
  // Replace background colors in sections
  content = content.replace(/bg-black/g, 'bg-brand-surface');
  content = content.replace(/bg-white/g, 'bg-white/5');
  content = content.replace(/bg-gray-100/g, 'bg-white/10');
  content = content.replace(/bg-gray-50/g, 'bg-white/5');
  
  // Replace borders
  content = content.replace(/border-gray-200/g, 'border-white/10');
  content = content.replace(/border-gray-300/g, 'border-white/20');
  content = content.replace(/border-black/g, 'border-white/20');
  
  // Special handling for prose (Tailwind typography plugin)
  content = content.replace(/prose-gray/g, 'prose-invert');
  
  // Make sure not to mess up text-brand-text where we replaced text-black etc
  // We can do another pass for prose to make it look good in dark mode
  content = content.replace(/className="prose prose-lg max-w-none text-brand-secondary/g, 'className="prose prose-invert prose-lg max-w-none text-brand-secondary');
  
  fs.writeFileSync(filePath, content);
}
console.log('Fixed styles in articles');
