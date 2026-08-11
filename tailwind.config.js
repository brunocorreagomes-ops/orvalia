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
          bg: "#0D1117", // Grafite profundo mineral
          surface: "#141820",
          card: "#12161F",
          text: "#E8EAEF", // Off-white mineral
          secondary: "#8A92A0", // Neutro sofisticado
          whatsapp: "#25D366",
          red: "#E5383B", // Vermelho de diagnóstico e correção
          accent: {
            red: "#E5383B", // Marcador de diagnóstico / gap
            light: "#E8EAEF", // Off-white de alto contraste
            dark: "#1A222D",
            teal: "#79DEC8",
          },
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Literata"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        'ultra-tight': '-0.06em',
        'super-tight': '-0.1em',
      },
      backgroundImage: {
        'orvalho-gradient': 'linear-gradient(135deg, #0A1620 0%, #0D2430 100%)',
      }
    },
  },
  plugins: [],
}
