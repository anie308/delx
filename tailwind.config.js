/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'quicksand': ['Quicksand', 'sans-serif']
      },
      colors:{
        'primary': '#839048',
        'secondary': '#FDB271',
        'dark': '#393953'
      },
      transitionProperty:{
        'left': 'left'
      }
    },
  },
  plugins: [],
}

