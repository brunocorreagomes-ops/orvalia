import fs from 'fs';

let content = fs.readFileSync('src/pages/Blog/BlogIndex.tsx', 'utf8');

if (!content.includes('import BlogImage')) {
  content = content.replace(
    'import SEO from "../../components/SEO";',
    'import SEO from "../../components/SEO";\nimport BlogImage from "../../components/BlogImage";'
  );
}

content = content.replace(
  /<img src=\{article\.image\} alt=\{article\.title\} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0" onError=\{\(e\) => \{ e\.currentTarget\.style\.opacity = '0'; \}\} \/>/,
  '<BlogImage src={article.image} alt={article.title} className="group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0" />'
);

fs.writeFileSync('src/pages/Blog/BlogIndex.tsx', content);
