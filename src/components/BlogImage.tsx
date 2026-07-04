interface BlogImageProps {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
}

export default function BlogImage({ src, alt, className = '', caption }: BlogImageProps) {
  return (
    <div className={`relative w-full aspect-video bg-white/5 overflow-hidden flex items-center justify-center ${className}`}>
      {/* Fallback text behind the image */}
      <span className="absolute inset-0 flex items-center justify-center text-white/20 text-xs text-center px-4 font-mono z-0">
        {alt}
      </span>
      {/* Image sits on top and hides the text if it loads. If it breaks, opacity-0 reveals the text */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover z-10"
        onError={(e) => {
          e.currentTarget.style.opacity = '0';
        }}
        onLoad={(e) => {
          e.currentTarget.style.opacity = '1';
        }}
        style={{ transition: 'opacity 0.3s ease' }}
      />
      {caption && (
        <div className="absolute bottom-4 right-4 z-20 pointer-events-none text-right flex justify-end">
          <div className="bg-brand-bg/80 backdrop-blur-md border border-brand-accent-light/20 px-4 py-2 rounded-xl inline-block shadow-2xl max-w-[90%]">
            <span className="text-brand-accent-light text-[10px] sm:text-xs font-bold tracking-widest uppercase font-mono">
              {caption}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
