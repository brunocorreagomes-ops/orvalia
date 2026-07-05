import { useState } from 'react';

interface BlogImageProps {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
  variant?: 'card' | 'hero';
}

export default function BlogImage({ src, alt, className = '', caption, variant = 'hero' }: BlogImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const isCard = variant === 'card';

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
          <linearGradient id={`grad${seed}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color1} stopOpacity="0.4" />
            <stop offset="100%" stopColor={color2} stopOpacity="0.8" />
          </linearGradient>
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
            <feColorMatrix type="matrix" values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 0.15 0" />
          </filter>
        </defs>
        
        {shapeType === 0 && (
          <circle cx={400 + (seed % 100)} cy={300 - (seed % 50)} r={200 + (seed % 100)} fill={`url(#grad${seed})`} />
        )}
        {shapeType === 1 && (
          <path d={`M 0 ${200 + (seed % 100)} Q 400 ${400 + (seed % 200)} 800 ${100 + (seed % 300)} L 800 600 L 0 600 Z`} fill={`url(#grad${seed})`} opacity="0.6" />
        )}
        {shapeType === 2 && (
          <rect x={100 + (seed % 200)} y={50 + (seed % 100)} width={600} height={500} fill={`url(#grad${seed})`} rx="40" transform={`rotate(${(seed % 15) - 7} 400 300)`} opacity="0.7" />
        )}
        {shapeType === 3 && (
          <path d={`M ${100 + seed%50} 300 A ${150 + seed%50} ${200 + seed%50} 0 1 1 ${700 - seed%50} 300 A ${150 + seed%50} ${200 + seed%50} 0 1 1 ${100 + seed%50} 300`} fill="none" stroke={`url(#grad${seed})`} strokeWidth="4" opacity="0.8" />
        )}
        
        {/* Abstract typography/brand mark in the background */}
        <text x="5%" y="90%" fill="#E5F0F1" opacity="0.05" fontSize="120" fontWeight="bold" fontFamily="sans-serif">
          {(seed % 100).toString().padStart(2, '0')}
        </text>
        
        <rect width="100%" height="100%" filter="url(#noise)" opacity="0.5" />
      </svg>
    );
  };


  return (
    <div className={`relative w-full aspect-video bg-[#0a0a0a] overflow-hidden flex items-center justify-center group/image ${className}`}>
      {/* Fallback text behind the image */}
      {!isLoaded && (
        <span className="absolute inset-0 flex items-center justify-center text-white/20 text-xs md:text-sm text-center px-4 font-mono z-0">
          {alt}
        </span>
      )}
      
      {/* Image sits on top */}
      {src.includes('ibb.co') ? renderSVG() : (
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
      )}
      
      {/* Gradient overlay for better caption legibility */}
      {caption && (
        <div className={`absolute inset-0 bg-gradient-to-t ${isCard ? 'from-black/95 via-black/10' : 'from-black/95 via-black/40'} to-transparent z-10 pointer-events-none opacity-90 group-hover/image:opacity-100 transition-opacity duration-700`} />
      )}
      
      {/* Editorial-style caption badge */}
      {caption && (
        <div className={`absolute z-20 pointer-events-none flex justify-end items-end transform transition-transform duration-700 group-hover/image:-translate-y-1 md:group-hover/image:-translate-y-2 ${
          isCard 
            ? 'bottom-2 right-2 md:bottom-4 md:right-4' 
            : 'bottom-4 right-4 md:bottom-7 md:right-7 lg:bottom-9 lg:right-9'
        }`}>
          <div className={`bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-center ${
            isCard 
              ? 'px-4 py-3 md:px-[22px] md:py-[16px] rounded-xl w-[60%] md:w-[65%] max-w-[280px]' 
              : 'px-7 py-5 md:px-[36px] md:py-[26px] rounded-[1.25rem] w-[80%] md:w-[46%] lg:w-[42%] min-w-[280px] md:min-w-[380px] max-w-[560px]'
          }`}>
            {/* Subtle glow effect behind the text */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-accent-light/5 to-transparent opacity-50" />
            
            <span className={`relative block text-white/95 font-bold uppercase font-mono leading-relaxed drop-shadow-lg text-center ${
              isCard
                ? 'text-[11px] md:text-[13px] tracking-[0.15em] md:tracking-[0.2em]'
                : 'text-sm md:text-base lg:text-[1.1rem] tracking-[0.2em] md:tracking-[0.25em]'
            }`}>
              {caption}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
