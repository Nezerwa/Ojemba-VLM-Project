/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      spacing: {
        maxScreen: "calc((100% - 1280px) / 2)",
      },

      fontFamily: {
        'Roboto': ["Roboto", "sans-serif"],
        'shwishwi': ["Tilt Prism", "cursive"],
        'raleway': ["Raleway", "sans-serif"],
        'montserrat': ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
