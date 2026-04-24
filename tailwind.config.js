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
          bg: "#0A0A0B", // Deep Noir
          surface: "rgba(255, 237, 215, 0.03)",
          text: "#FFEDD7", // From DNA: rgb(255, 237, 215)
          secondary: "#BBAC97", // From DNA: rgb(187, 172, 151)
          whatsapp: "#25D366",
          accent: {
            light: "#00F5FF", // Electric Turquoise
            dark: "#0066FF", // Deep High-Tech Blue
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
      }
    },
  },
  plugins: [],
}
