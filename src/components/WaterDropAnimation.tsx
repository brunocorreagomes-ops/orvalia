import { motion } from "framer-motion";

export default function WaterDropAnimation() {
  return (
    <div className="relative w-24 h-24 flex items-center justify-center select-none pointer-events-none mb-2">
      {/* Container for absolute centering */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full text-brand-accent-light"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient for a premium glass-like glow on the drop */}
          <linearGradient id="drop-glow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffd1" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#00a8ff" stopOpacity="0.4" />
          </linearGradient>
          {/* Ambient glow shadow */}
          <filter id="glow-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <style>
          {`
            @keyframes drop-flow {
              0% {
                transform: translateY(-24px) scale(0.2, 0.2);
                opacity: 0;
              }
              8% {
                transform: translateY(-24px) scale(1, 1.2);
                opacity: 0.95;
              }
              15% {
                transform: translateY(-24px) scale(1.1, 0.9);
                opacity: 0.95;
              }
              40% {
                transform: translateY(22px) scale(0.9, 1.1);
                opacity: 0.95;
              }
              46% {
                transform: translateY(35px) scale(1.3, 0.5);
                opacity: 0.8;
              }
              52% {
                transform: translateY(35px) scale(0, 0);
                opacity: 0;
              }
              100% {
                transform: translateY(35px) scale(0, 0);
                opacity: 0;
              }
            }

            @keyframes ripple-primary {
              0%, 40% {
                transform: scale(0);
                opacity: 0;
              }
              45% {
                transform: scale(0.15);
                opacity: 0.9;
              }
              75% {
                transform: scale(1);
                opacity: 0;
              }
              100% {
                transform: scale(1);
                opacity: 0;
              }
            }

            @keyframes ripple-secondary {
              0%, 48% {
                transform: scale(0);
                opacity: 0;
              }
              53% {
                transform: scale(0.15);
                opacity: 0.6;
              }
              85% {
                transform: scale(1.3);
                opacity: 0;
              }
              100% {
                transform: scale(1.3);
                opacity: 0;
              }
            }

            @keyframes subtle-bounce {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-3px); }
            }

            .water-drop {
              animation: drop-flow 4.5s infinite cubic-bezier(0.45, 0.05, 0.55, 0.95);
              transform-origin: 50px 35px;
              filter: url(#glow-blur);
            }

            .ripple-1 {
              animation: ripple-primary 4.5s infinite cubic-bezier(0.1, 0.8, 0.25, 1);
              transform-origin: 50px 72px;
            }

            .ripple-2 {
              animation: ripple-secondary 4.5s infinite cubic-bezier(0.1, 0.8, 0.25, 1);
              transform-origin: 50px 72px;
            }

            .ambient-pool {
              animation: subtle-bounce 6s infinite ease-in-out;
            }
          `}
        </style>

        {/* Ambient Subtle Static Base Ellipse */}
        <ellipse 
          className="ambient-pool stroke-brand-accent-light/10 fill-none" 
          cx="50" 
          cy="72" 
          rx="12" 
          ry="3" 
          strokeWidth="1"
        />

        {/* Animated Ripples triggered when droplet hits (Y=72) */}
        <ellipse 
          className="ripple-1 stroke-brand-accent-light fill-none" 
          cx="50" 
          cy="72" 
          rx="25" 
          ry="7" 
          strokeWidth="1.5" 
        />
        <ellipse 
          className="ripple-2 stroke-brand-accent-light/50 fill-none" 
          cx="50" 
          cy="72" 
          rx="25" 
          ry="7" 
          strokeWidth="1" 
        />

        {/* Droplet forming, falling, and splashing */}
        <path 
          className="water-drop fill-[url(#drop-glow)]" 
          d="M50 25 C47 25 44 29 44 34 C44 37.3 46.7 40 50 40 C53.3 40 56 37.3 56 34 C56 29 53 25 50 25 Z"
        />
      </svg>
    </div>
  );
}
