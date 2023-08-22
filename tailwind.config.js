/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      spacing: {
        maxScreen: "calc((100% - 1480px) / 2)",
        medImage: "640px"
      },

      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        shwishwi: ["Tilt Prism", "cursive"],
        raleway: ["Raleway", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        gp: "#001342",
        "green-primary": "#8ACC50",
        "green-primary-trans": "#8acc50a1",
        "green-secondary": "#116355",
        "primary-grey": "rgba(4,4,4,0.51)",
        quotes: "rgba(0, 19, 66, 0.80)",
        "blue-primary": "#001342",
      },
      paddding: {
        71: "17rem",
      },
      screens: {
        "semixl" : "1150px",
        "abovexl": "1486px",
      },
    },
  },
  plugins: [],
};
