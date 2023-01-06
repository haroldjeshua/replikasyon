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
  },
  plugins: [],
};
