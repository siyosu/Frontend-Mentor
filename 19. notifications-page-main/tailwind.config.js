/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    colors: {
      red: "hsl(1, 90%, 64%)",
      blue: "hsl(219, 85%, 26%)",
      white: "hsl(0, 0%, 100%)",
      gray: {
        100: "hsl(210, 60%, 98%)",
        200: "hsl(211, 68%, 94%)",
        300: "hsl(205, 33%, 90%)",
        400: "hsl(219, 14%, 63%)",
        500: "hsl(219, 12%, 42%)",
        600: "hsl(224, 21%, 14%)",
      },
    },
    fontFamily: {
      jakarta: ["Plus Jakarta Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
