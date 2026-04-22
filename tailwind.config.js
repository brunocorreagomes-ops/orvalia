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
          bg: "#02040D", // Deep Ink Blue
          text: "#F0F7FF", // Luminous Frost
          secondary: "#B0BEDA", // Refined Silver Blue (Higher Contrast)
          whatsapp: "#25D366", // Brand WhatsApp Green
          accent: {
            light: "#58C2FF", // Electric Sky
            dark: "#0055FF", // Digital Cobalt
            glow: "rgba(0, 85, 255, 0.15)",
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
