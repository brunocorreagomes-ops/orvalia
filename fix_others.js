import fs from 'fs';

const files = ['src/pages/Blog/ArticleEstetica.tsx', 'src/pages/Blog/ArticleGEO.tsx'];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/<motion\.div[^>]*>\s*<BlogImage src="https:\/\/images\.unsplash\.com[^>]+>\s*<\/motion\.div>/g, '');
  fs.writeFileSync(file, content);
  console.log('Fixed ' + file);
}
