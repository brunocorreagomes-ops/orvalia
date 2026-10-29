import React from 'react';

interface OrvaliaLogoProps {
  className?: string;
  theme?: 'dark' | 'light';
}

/** The Point V12-E R1: editable vector assets remain in public/brand/v12e/. */
export default function OrvaliaLogo({ className = 'w-40', theme = 'dark' }: OrvaliaLogoProps) {
  const src = theme === 'dark'
    ? '/brand/v12e/orvalia-wordmark-dark.svg'
    : '/brand/v12e/orvalia-wordmark-light.svg';

  return (
    <img
      className={`${className} h-auto block`}
      src={src}
      width={782}
      height={197}
      alt="Orvalia Studio"
      decoding="async"
    />
  );
}
