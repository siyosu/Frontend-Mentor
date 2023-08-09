/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      barlow: ["Barlow", "sans-serif"],
      fraunces: ["Fraunces", "serif"],
    },
    extend: {
      colors: {
        primary: {
          red: "hsl(7, 99%, 70%)",
          yellow: "hsl(51, 100%, 49%)",
          "desaturated-cyan": "hsl(167, 40%, 24%)",
          "moderate-cyan": "hsl(168, 34%, 41%)",
          "footer-bg": "hsl(168, 44%, 70%)",
          "dark-blue": "hsl(198, 62%, 26%)",
        },
        dark: {
          100: "hsl(210, 4%, 67%)",
          200: "hsl(232, 10%, 55%)",
          300: "hsl(213, 9%, 39%)",
          400: "hsl(212, 27%, 19%)",
        },
        white: "hsl(0, 0%, 100%)",
      },
      animation: {
        "slide-in": "slide 0.3s cubic-bezier(0.4, 0, 0.6, 1)",
      },
      keyframes: {
        slide: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
      },
      screens: {
        "2xl": "1440px",
      },
      fontSize:{
        'base': '18px'
      }
    },
  },
  plugins: [],
};
