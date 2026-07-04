import fs from 'fs';

const filePath = 'src/pages/PresencaDigital.tsx';
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
content = content.replace(/className="prose prose-lg max-w-none text-brand-secondary/g, 'className="prose prose-invert prose-lg max-w-none text-brand-secondary');

fs.writeFileSync(filePath, content);
console.log('Fixed PresencaDigital.tsx');
