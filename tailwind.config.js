/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "custom-rose": "'Red Rose', cursive"
      },

      colors: {
        "custom-pink-100": "#A02279",
        "custom-black-100": "#1D1D1E",

      }
    },

  },
  plugins: [],
}