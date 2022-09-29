/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/index.css",
    "./src/index.js",
    "./src/Components/CounterExample.js",
    "./src/Components/Header.js",
    "./src/Components/HelloWorld.js",
    "./src/Components/Footer.js",
    "./src/Components/Navigation.js",
    "./src/Components/NavigationMenu.js",
    "./src/Components/ProductCard.js",
    "./src/Views/Home.js",
    "./src/Views/About.js",
    "./src/Views/Product.js",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'black-t-50': 'rgba(0,0,0,0.5)',
      }
    },
  },
  plugins: [],
}
