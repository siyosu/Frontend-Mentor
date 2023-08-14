/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    colors: {
      'violet': 'hsl(263, 55%, 52%)',
      'dark': {
        '100': 'hsl(217, 19%, 35%)',
        '200': 'hsl(219, 29%, 14%)'
      },
      'gray': {
        '100': 'hsl(210, 46%, 95%)',
        '200': 'hsl(0, 0%, 81%)'
      },
      'white': 'hsl(0, 0%, 100%)'
    },
    fontFamily: {
      barlow: ['Barlow Semi Condensed', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

