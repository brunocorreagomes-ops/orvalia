import fs from 'fs';

let content = fs.readFileSync('src/pages/Blog/Article11.tsx', 'utf8');

// The Unsplash block:
const regex = /<motion\.div\s*initial=\{\{ opacity: 0, scale: 0\.98 \}\}\s*animate=\{\{ opacity: 1, scale: 1 \}\}\s*transition=\{\{ delay: 0\.3 \}\}\s*>\s*<BlogImage src="https:\/\/images\.unsplash\.com[^>]+>\s*<\/motion\.div>/;

if (content.match(regex)) {
  content = content.replace(regex, '');
  fs.writeFileSync('src/pages/Blog/Article11.tsx', content);
  console.log('Fixed Article11.tsx');
} else {
  // Try a looser match
  content = content.replace(/<motion\.div[^>]*>\s*<BlogImage src="https:\/\/images\.unsplash\.com[^>]+>\s*<\/motion\.div>/, '');
  fs.writeFileSync('src/pages/Blog/Article11.tsx', content);
  console.log('Fixed Article11.tsx with loose match');
}
