/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/heroo.gif')",
        bgImage2: "url('/bg7.webp')",
        bgImage3: "url('/serv2.webp')",
        bgImage4: "url('/bg9.webp')",
        bgImage7: "url('/pexel1.webp')",
        bgImage8: "url('/pexel2.webp')",
        bgImage9: "url('/pexel3.webp')",
      },
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
          DEFAULT: "#2563eb",
          dark: "#1d4ed8",
          light: "#3b82f6",
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
