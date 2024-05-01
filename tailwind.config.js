/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#FF3811',
        secondary: '#821904',
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

