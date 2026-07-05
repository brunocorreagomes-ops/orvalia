const fs = require('fs');
let content = fs.readFileSync('src/components/BlogImage.tsx', 'utf8');

const replacement = `
  const seed = alt.length + (caption ? caption.length : 0);
  
  // Procedural SVG Generation for brand-aligned editorial covers
  const renderSVG = () => {
    const colors = ['#0A1620', '#1A6B63', '#79DEC8', '#E5F0F1', '#061016'];
    const color1 = colors[seed % 2 + 1];
    const color2 = colors[(seed + 2) % 3];
    
    // Vary shapes based on seed
    const shapeType = seed % 4; 
    
    return (
      <svg className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-[1.5s] ease-out group-hover/image:scale-105" viewBox="0 0 800 600" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#0A1620" />
        <defs>
          <linearGradient id={\`grad\${seed}\`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color1} stopOpacity="0.4" />
            <stop offset="100%" stopColor={color2} stopOpacity="0.8" />
          </linearGradient>
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
            <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.15 0" />
          </filter>
        </defs>
        
        {shapeType === 0 && (
          <circle cx={400 + (seed % 100)} cy={300 - (seed % 50)} r={200 + (seed % 100)} fill={\`url(#grad\${seed})\`} />
        )}
        {shapeType === 1 && (
          <path d={\`M 0 \${200 + (seed % 100)} Q 400 \${400 + (seed % 200)} 800 \${100 + (seed % 300)} L 800 600 L 0 600 Z\`} fill={\`url(#grad\${seed})\`} opacity="0.6" />
        )}
        {shapeType === 2 && (
          <rect x={100 + (seed % 200)} y={50 + (seed % 100)} width={600} height={500} fill={\`url(#grad\${seed})\`} rx="40" transform={\`rotate(\${(seed % 15) - 7} 400 300)\`} opacity="0.7" />
        )}
        {shapeType === 3 && (
          <path d={\`M \${100 + seed%50} 300 A \${150 + seed%50} \${200 + seed%50} 0 1 1 \${700 - seed%50} 300 A \${150 + seed%50} \${200 + seed%50} 0 1 1 \${100 + seed%50} 300\`} fill="none" stroke={\`url(#grad\${seed})\`} strokeWidth="4" opacity="0.8" />
        )}
        
        {/* Abstract typography/brand mark in the background */}
        <text x="5%" y="90%" fill="#E5F0F1" opacity="0.05" fontSize="120" fontWeight="bold" fontFamily="sans-serif">
          {(seed % 100).toString().padStart(2, '0')}
        </text>
        
        <rect width="100%" height="100%" filter="url(#noise)" opacity="0.5" />
      </svg>
    );
  };
`;

content = content.replace(
  /<img[\s\S]*?style=\{\{ transition: 'opacity 0\.5s ease, transform 1\.5s ease-out' \}\}[\s\S]*?\/>/,
  `{src.includes('ibb.co') ? renderSVG() : (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-[1.5s] ease-out group-hover/image:scale-105"
        onError={(e) => {
          e.currentTarget.style.opacity = '0';
        }}
        onLoad={(e) => {
          e.currentTarget.style.opacity = '1';
          setIsLoaded(true);
        }}
        style={{ transition: 'opacity 0.5s ease, transform 1.5s ease-out' }}
      />
      )}`
);

content = content.replace(/const isCard = variant === 'card';/, `const isCard = variant === 'card';\n${replacement}`);

fs.writeFileSync('src/components/BlogImage.tsx', content);
