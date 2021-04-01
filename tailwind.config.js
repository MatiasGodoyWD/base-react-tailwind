module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        danger:'#ff5f40'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
