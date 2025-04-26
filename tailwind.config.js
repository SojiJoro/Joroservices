/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enables class-based dark mode
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/heroo.gif')",
        bgImage2: "url('/bg7.webp')",
        bgImage3: "url('/serv2.webp')",
        bgImage4: "url('/bg9.webp')",
        bgImage5: "url('/bg10.webp')",
        bgImage6: "url('/bg11.webp')",
        bgImage7: "url('/pexel1.webp')",
        bgImage8: "url('/pexel2.webp')",
        bgImage9: "url('/pexel3.webp')",
        //   'linear-gradient(to bottom right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Headings
        inter: ["Inter", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#0F2027", // Light mode primary
          dark: "#1B263B", // Dark mode primary
        },

        glass: {
          lightBlue: "rgba(173, 216, 230, 0.7)", // Light blue with 70% opacity
        },
        secondary: {
          DEFAULT: "#2C5364",
          dark: "#334E68",
        },

        accent: {
          DEFAULT: "#55DDE0",
          dark: "#48A9A6",
        },
        background: {
          DEFAULT: "#F8FAFC", // Light mode background
          dark: "#121212", // Dark mode background
        },
        text: {
          DEFAULT: "#accbd4",
          dark: "#E5E7EB",
        },
      },
      backdropFilter: {
        none: "none",
        blur: "blur(10px)", // Adds backdrop blur for glass effect
      },
    },
  },
  plugins: [],
};
