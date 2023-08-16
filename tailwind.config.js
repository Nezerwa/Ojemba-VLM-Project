/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      spacing: {
        maxScreen: "calc((100% - 1280px) / 2)",
      },
    },
  },
  plugins: [],
};
