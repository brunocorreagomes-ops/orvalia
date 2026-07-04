interface BlogImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function BlogImage({ src, alt, className = '' }: BlogImageProps) {
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
    </div>
  );
}
