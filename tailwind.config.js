/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Cores Legadas (mantidas para não quebrar componentes não migrados)
          bg: '#0D1117',
          red: '#E5383B',
          secondary: '#A1A1AA',
          'accent-light': '#66E7E1',
          whatsapp: '#25D366',
          surface: '#1A1A1A',
          text: '#FFFFFF',
          
          // Novo Sistema Dew Point V3 (Mineral Editorial)
          mineral: '#E9E8E3',
          warm: '#F5F4EF',
          ink: '#080A0C',
          graphite: '#181B1E',
          cyan: '#66E7E1',
          'cyan-dark': '#006B68',
          muted: '#3F4A47',
          line: '#C2C8C5',
          mist: '#CDD3D0',
        }
      },
      fontFamily: {
        // Mantendo a Hanken Grotesk como base e adicionando fallbacks editoriais
        sans: ['"Hanken Grotesk"', 'Inter', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        'ultra-tight': '-0.075em',
      }
    },
  },
  plugins: [],
}
