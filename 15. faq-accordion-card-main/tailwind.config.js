/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    fontFamily: {
      kumbh: ['Kumbh Sans', 'sans-serif']
    },
    extend: {
      colors:{
        dark: {
          '100': 'hsl(240, 5%, 91%)',
          '200': 'hsl(240, 6%, 50%)',
          '300': 'hsl(237, 12%, 33%)',
          '400': 'hsl(238, 29%, 16%)'
        },
        soft: {
          'red': 'hsl(14, 88%, 65%)',
          'violet': 'hsl(273, 75%, 66%)',
          'blue': 'hsl(240, 73%, 65%)'
        },
      }
    },
  },
  plugins: [],
}

