/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#0a1628",
          dark: "#0f1d32",
        },
        glass: {
          lightBlue: "rgba(173, 216, 230, 0.7)",
        },
        secondary: {
          DEFAULT: "#1e3a5f",
          dark: "#2a4a72",
        },
        accent: {
          DEFAULT: "#14b8a6",
          dark: "#0d9488",
          light: "#2dd4bf",
        },
        background: {
          DEFAULT: "#F8FAFC",
          dark: "#0a1628",
        },
        text: {
          DEFAULT: "#94a3b8",
          dark: "#e2e8f0",
        },
      },
      backdropFilter: {
        none: "none",
        blur: "blur(10px)",
      },
    },
  },
  plugins: [],
};
