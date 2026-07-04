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
          bg: "#0A1620", // Deep Teal / Orvalho
          surface: "rgba(255, 255, 255, 0.03)",
          text: "#E5F0F1", // Slightly cooler white to match teal
          secondary: "#9EABB2", // Cooler muted text
          whatsapp: "#25D366",
          accent: {
            light: "#79DEC8", // Água de piscina ao amanhecer / Soft teal
            dark: "#1A6B63", // Deep water
            brown: "#6C5F51", // From DNA
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
