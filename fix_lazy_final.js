import fs from 'fs';

let content = fs.readFileSync('src/pages/Blog/BlogIndex.tsx', 'utf8');

const target = '<LazyLoadImage src={article.image} alt={article.title} effect="blur" wrapperClassName="w-full h-full" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0" onError={(e) => { e.currentTarget.style.opacity = \'0\'; }} />';
const replacement = '<img src={article.image} alt={article.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0" onError={(e) => { e.currentTarget.style.opacity = \'0\'; }} onLoad={(e) => { e.currentTarget.style.opacity = \'1\'; e.currentTarget.style.filter = \'none\'; }} style={{ filter: \'blur(10px)\', opacity: 0, transition: \'filter 0.5s ease-out, opacity 0.5s ease-out\' }} />';

content = content.replace(target, replacement);

fs.writeFileSync('src/pages/Blog/BlogIndex.tsx', content);
console.log('Fixed BlogIndex.tsx successfully');
