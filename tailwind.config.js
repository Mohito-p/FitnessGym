import { Container } from 'postcss'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily:{
      //  sans: ["Inter", "sans-serif"],
      },
      colors: {
         primary: "#fe9808",
         dark: "#111111",

      },
      Container: {
         center: true,
         padding: {
          DEFAULT: "1rem",
          sm: "2rem",
         },
      },
    },
  },
  plugins: [],
}

