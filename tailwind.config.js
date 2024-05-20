/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fafafa",
        blue: "#006dd2",
        black: "#000000",
        yellow: "#F9DC4D",
        fillup: "#51B1D9",
      },
    },
  },
  plugins: [],
};
