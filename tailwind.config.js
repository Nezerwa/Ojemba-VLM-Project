/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      spacing: {
        maxScreen: "calc((100% - 1280px) / 2)",
      },

      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        shwishwi: ["Tilt Prism", "cursive"],
        raleway: ["Raleway", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        "green-primary": "#8ACC50",
        "green-secondary": "#116355",
        "primary-grey": "rgba(4,4,4,0.51)",
      },
    },
  },
  plugins: [],
};
