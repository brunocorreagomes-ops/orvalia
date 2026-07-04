import fs from 'fs';

let content = fs.readFileSync('src/pages/Blog/BlogIndex.tsx', 'utf8');

// Remove LazyLoadImage imports
content = content.replace('import { LazyLoadImage } from "react-lazy-load-image-component";\nimport "react-lazy-load-image-component/src/effects/blur.css";', '');
content = content.replace('import { LazyLoadImage } from "react-lazy-load-image-component";\n', '');
content = content.replace('import "react-lazy-load-image-component/src/effects/blur.css";\n', '');

// Revert LazyLoadImage to img with robust native lazy load
const lazyRegex = /<LazyLoadImage src=\{([^}]+)\} alt=\{([^}]+)\} effect="blur" wrapperClassName="w-full h-full" className="([^"]+)" onError=\{([^}]+)\} \/>/g;
if (content.match(lazyRegex)) {
  content = content.replace(lazyRegex, '<img src={$1} alt={$2} loading="lazy" decoding="async" className="$3" onError={$4} onLoad={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.filter = "none"; }} style={{ filter: "blur(10px)", opacity: 0, transition: "filter 0.5s ease-out, opacity 0.5s ease-out" }} />');
}

fs.writeFileSync('src/pages/Blog/BlogIndex.tsx', content);
console.log('Fixed BlogIndex.tsx with robust native lazy loading');
