/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1450a3',
        secondary: '#191D88',
        tertially: '#337CCF',
        complimentry: '#FFC436',
      },

    },
  },
  plugins: [],
  
}