/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0D10",
        surface: "#1C1F24",
        primary: "#8D73FF",
        accent: "#2F80ED",
        muted: "#6C7380",
        border: "#2A2E35",
        text: "#F5F7FA",
        textSecondary: "#A1A8B3",
        error: "#FF4E4E",
        success: "#4ADE80",
        warning: "#FBBF24",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        glow: "0 0 0.5rem rgba(141, 115, 255, 0.6)",
        outline: "0 0 0 2px rgba(141, 115, 255, 0.4)",
      },
    },
  },
  plugins: [],
};
