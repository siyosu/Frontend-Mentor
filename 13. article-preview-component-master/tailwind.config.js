/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors:{
        blue: {
          '100': 'hsl(210, 46%, 95%)',
          '200': 'hsl(212, 23%, 69%)',
          '300': 'hsl(214, 17%, 51%)',
          '400': 'hsl(217, 19%, 35%)'
        }
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif']
      }
    },
  },
  plugins: [],
}

