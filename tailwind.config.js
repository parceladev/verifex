/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#282828",
        secondary: "#F4F4F4",
      },
      fontFamily: {
        sans: ["Encode Sans Semi Condensed", "sans-serif"], 
        didot: ["Linotype Didot", "serif"], 
        roman: ["Didot Roman", "serif"]
      },
      backgroundColor: {
        navtheme: "#E0E0E0",
        primary: "#FBFBFB",
        secondary: "#282828",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
