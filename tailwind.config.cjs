/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*jsx"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'jakarta': ['Plus Jakarta Sans', 'sans-serif']
      },  
    },
  },
  plugins: [],
}
