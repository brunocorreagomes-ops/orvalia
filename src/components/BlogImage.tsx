import { useState } from 'react';

interface BlogImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function BlogImage({ src, alt, className = '' }: BlogImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`w-full aspect-video object-cover ${className}`}
      onLoad={() => setLoaded(true)}
      onError={(e) => {
        e.currentTarget.style.opacity = '0';
      }}
      style={{
        filter: loaded ? 'none' : 'blur(10px)',
        opacity: loaded ? 1 : 0,
        transition: 'filter 0.5s ease-out, opacity 0.5s ease-out',
      }}
    />
  );
}
