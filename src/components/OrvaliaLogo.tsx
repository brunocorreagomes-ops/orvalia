import React from 'react';

interface OrvaliaLogoProps {
  className?: string;
  theme?: 'dark' | 'light';
}

export default function OrvaliaLogo({ className = "w-40", theme = 'dark' }: OrvaliaLogoProps) {
  // Dual-Tone Dew Cyan: luminoso no escuro, núcleo ótico denso no claro
  const cyanColor = theme === 'dark' ? '#66E7E1' : '#0FCFC9';
  const textColor = theme === 'dark' ? '#FFFFFF' : '#080A0C';

  return (
    <svg
      className={className}
      viewBox="0 0 530.69 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Orvalia — Marca, site e estratégia"
      role="img"
    >
      <g fill={textColor}>
        {/* Arco do O com abertura controlada de 64° */}
        <path
          d="M 89.074 77.667 A 39 39 0 1 1 89.074 36.333"
          stroke={textColor}
          strokeWidth="10.5"
          strokeLinecap="butt"
          fill="none"
        />
        {/* Dew Point Calibrado */}
        <circle cx="94" cy="57" r="10" fill={cyanColor} />

        {/* Lettering RVALIA */}
        <path d="M148 0H328V585H687C692 585 696 585 701 585L1015 0H1225L890 614C1085 674 1207 825 1207 1038C1207 1316 1012 1490 701 1490H148ZM328 745V1330H695C902 1330 1029 1219 1029 1038C1029 857 903 745 697 745Z" transform="translate(116.000 99) scale(0.0550336 -0.0550336)"/>
        <path d="M570 0H774L1318 1490H1130L816 592C786 505 740 369 675 165C608 369 563 505 532 592L210 1490H20Z" transform="translate(191.668 99) scale(0.0550336 -0.0550336)"/>
        <path d="M20 0H208L358 418H980L1126 0H1318L774 1490H570ZM415 578 530 898C568 1003 608 1123 672 1321C736 1123 776 1003 813 898L925 578Z" transform="translate(269.703 99) scale(0.0550336 -0.0550336)"/>
        <path d="M148 0H1046V160H328V1490H148Z" transform="translate(347.738 99) scale(0.0550336 -0.0550336)"/>
        <path d="M328 1490H148V0H328Z" transform="translate(412.455 99) scale(0.0550336 -0.0550336)"/>
        <path d="M20 0H208L358 418H980L1126 0H1318L774 1490H570ZM415 578 530 898C568 1003 608 1123 672 1321C736 1123 776 1003 813 898L925 578Z" transform="translate(443.051 99) scale(0.0550336 -0.0550336)"/>
      </g>
    </svg>
  );
}
