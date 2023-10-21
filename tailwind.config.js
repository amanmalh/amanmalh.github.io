/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['Manrope'],
      'serif': ['Abril Fatface']
    },
    colors: {
      primary: '#873EFF',
      dark: '#242424',
      white: '#fff'
    },
    extend: {
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "95v": "95vh",
        "100v": "100vh",
      }
    },
  },
  plugins: [],
}

