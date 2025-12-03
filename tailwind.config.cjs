/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Roboto', 'sans-serif'],
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        baloo: ["Baloo 2", "cursive"],
        bungee: ["Bungee", "cursive"],
      },

      colors: {
        primaryBlue: "#0170c4",   // ⭐ Your custom color
        // heroBlue: "#00acf0",      // ⭐ If you want another one
      }
    },
  },
  plugins: [],
};
