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

  return (
    <div className={`relative w-full aspect-video bg-[#0a0a0a] overflow-hidden flex items-center justify-center group/image ${className}`}>
      {/* Fallback text behind the image */}
      {!isLoaded && (
        <span className="absolute inset-0 flex items-center justify-center text-white/20 text-xs md:text-sm text-center px-4 font-mono z-0">
          {alt}
        </span>
      )}
      
      {/* Image sits on top */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-[1.5s] ease-out group-hover/image:scale-105"
        onError={(e) => {
          e.currentTarget.style.opacity = '0';
        }}
        onLoad={(e) => {
          e.currentTarget.style.opacity = '1';
          setIsLoaded(true);
        }}
        style={{ transition: 'opacity 0.5s ease, transform 1.5s ease-out' }}
      />
      
      {/* Gradient overlay for better caption legibility */}
      {caption && (
        <div className={`absolute inset-0 bg-gradient-to-t ${isCard ? 'from-black/95 via-black/10' : 'from-black/95 via-black/40'} to-transparent z-10 pointer-events-none opacity-90 group-hover/image:opacity-100 transition-opacity duration-700`} />
      )}
      
      {/* Editorial-style caption badge */}
      {caption && (
        <div className={`absolute bottom-0 right-0 z-20 pointer-events-none flex justify-end items-end transform transition-transform duration-700 group-hover/image:-translate-y-1 md:group-hover/image:-translate-y-2 ${
          isCard 
            ? 'p-3 md:p-5' 
            : 'p-5 md:p-10 lg:p-12'
        }`}>
          <div className={`bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-center ${
            isCard 
              ? 'px-5 py-4 md:px-6 md:py-4 rounded-xl min-w-[85%] md:min-w-[80%] max-w-[95%]' 
              : 'px-8 py-6 md:px-12 md:py-10 lg:px-16 lg:py-12 rounded-2xl min-w-[95%] md:min-w-[85%] lg:min-w-[70%] max-w-[98%] md:max-w-[90%]'
          }`}>
            {/* Subtle glow effect behind the text */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-accent-light/5 to-transparent opacity-50" />
            
            <span className={`relative block text-white/95 font-bold uppercase font-mono leading-relaxed drop-shadow-lg text-right ${
              isCard
                ? 'text-[10px] md:text-[11px] tracking-[0.15em] md:tracking-[0.2em]'
                : 'text-sm md:text-[17px] lg:text-xl tracking-[0.2em] md:tracking-[0.25em]'
            }`}>
              {caption}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
