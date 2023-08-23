/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      animation: {
        invalid: "shake .2s linear",
      },
      keyframes: {
        shake: {
          "0%": { transform: "translateX(2px)" },
          "25%": { transform: "translateX(-2px)" },
          "50%": { transform: "translateX(2px)" },
          "100%": { transform: "translateX(-2px)" },
        },
      },
      colors: {
        cyan: {
          100: "hsl(189, 41%, 97%)",
          200: "hsl(185, 41%, 84%)",
          300: "hsl(184, 14%, 56%)",
          400: "hsl(172, 67%, 45%)",
          500: "hsl(186, 14%, 43%)",
          600: "hsl(183, 100%, 15%)",
        },
      },
      fontFamily: {
        space: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
