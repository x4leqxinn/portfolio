/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          'main' : '#d42eff',
          'main-100' : '#e699ff',
          'main-200' : '#b61ee6',
          'main-300' : '#8000b3'
        },
        background: {
          'light': '#f5f5f5',
          'dark': '#1e1e20'
        },
      }
    },
    fontFamily: {
      exo: ['Exo 2'],
    },
  },
  plugins: [],
}
