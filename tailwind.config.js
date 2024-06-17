/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["figmafont", "sans-serif"], // Custom font with fallback
      },
    },
  },
  plugins: [],
};
