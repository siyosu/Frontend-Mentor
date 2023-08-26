/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      padding: '24px',
      center: true
    },
    extend: {
      colors: {
        fm: {
          'blue': 'hsl(223, 87%, 63%)',
          'pale-blue': 'hsl(223, 100%, 88%)',
          'light-red': 'hsl(354, 100%, 66%)',
          'gray': 'hsl(0, 0%, 59%)',
          'dark-blue': 'hsl(209, 33%, 12%)',
        }
      },
      fontFamily: {
        libre: ['Libre Franklin', 'sans-serif']
      }
    },
  },
  plugins: [],
}

