/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      spacing: {
        "65": "calc((100% - 92.5rem) / 2)",
        "160": "40rem",
      },

      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        shwishwi: ["Tilt Prism", "cursive"],
        raleway: ["Raleway", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        "dark-blue": "#001342",
        "green-primary": "#8ACC50",
        "green-primary-trans": "#8acc50a1",
        "green-secondary": "#116355",
        "primary-grey": "rgba(4,4,4,0.51)",
        "light-blue": "rgba(0, 19, 66, 0.80)",
        "blue-primary": "#001342",
      },
      padding: {
        71: "17rem",
      },
      screens: {
        "smaller": "450px",
        "2md": "900px",
        "2lg": "1150px",
      },
    },
  },
  plugins: [],
};
