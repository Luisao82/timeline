/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      lilita: ['Lilita One','sans-serif'], // font-lilita
    },
    extend: {
      backgroundImage: {
        'card' : "url('./assets/card-mesa.jpg')",
        'fondo' : "url('./assets/fondo.jpg')"
      }
    },
  },
  plugins: [],
}
