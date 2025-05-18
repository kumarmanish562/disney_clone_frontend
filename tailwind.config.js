/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
        'disney-dark': '#040714',
         'disney-blue': '#0071CE',  
        'disney-gray': '#e5e5e5',
      },
      fontFamily: {
        sans: ['Avenir', 'sans-serif']
      }
    },
  },
  plugins: [],
}