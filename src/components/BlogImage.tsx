import { useState } from 'react';

interface BlogImageProps {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
}

export default function BlogImage({ src, alt, className = '', caption }: BlogImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

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
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent z-10 pointer-events-none opacity-80 group-hover/image:opacity-100 transition-opacity duration-700" />
      )}
      
      {/* Editorial-style caption badge */}
      {caption && (
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 md:pb-8 z-20 pointer-events-none flex justify-start items-end transform transition-transform duration-700 group-hover/image:-translate-y-2">
          <div className="bg-black/50 backdrop-blur-xl border border-white/20 px-5 py-3 md:px-6 md:py-4 rounded-xl shadow-2xl max-w-[95%] md:max-w-[85%] relative overflow-hidden">
            {/* Subtle glow effect behind the text */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-accent-light/10 to-transparent opacity-50" />
            
            <span className="relative block text-white/95 text-[11px] md:text-[13px] font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase font-mono leading-relaxed drop-shadow-lg">
              {caption}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
