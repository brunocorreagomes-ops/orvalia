import fs from 'fs';

let content = fs.readFileSync('src/pages/Blog/BlogIndex.tsx', 'utf8');

// Add imports
if (!content.includes('LazyLoadImage')) {
  content = content.replace(
    'import SEO from "../../components/SEO";',
    'import SEO from "../../components/SEO";\nimport { LazyLoadImage } from "react-lazy-load-image-component";\nimport "react-lazy-load-image-component/src/effects/blur.css";'
  );
}

// Replace img tag
const imgRegex = /<img\s+src=\{article\.image\}\s+alt=\{article\.title\}\s+loading="lazy"\s+className="([^"]+)"\s*onError=\{([^}]+)\}\s*\/>/g;
if (content.match(imgRegex)) {
  content = content.replace(imgRegex, '<LazyLoadImage src={article.image} alt={article.title} effect="blur" wrapperClassName="w-full h-full" className="$1" onError={$2} />');
} else {
    // If it is slightly different
    const imgRegex2 = /<img[^>]+src=\{article\.image\}[^>]+>/g;
    content = content.replace(imgRegex2, (match) => {
        return `<LazyLoadImage src={article.image} alt={article.title} effect="blur" wrapperClassName="w-full h-full" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0" onError={(e) => { e.currentTarget.style.opacity = '0'; }} />`;
    });
}

fs.writeFileSync('src/pages/Blog/BlogIndex.tsx', content);
console.log('Updated BlogIndex.tsx');
