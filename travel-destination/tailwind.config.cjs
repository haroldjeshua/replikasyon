/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Unbounded", "cursive"],
        sans: ["Manrope", "sans-serif"],
      },
    },
    screens: {
      xs: "440px",
      sm: "640px",
      md: "768px",
      tb: "920px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "2100px",
    },
  },
  plugins: [],
};
