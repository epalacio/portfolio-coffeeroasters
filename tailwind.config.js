module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'darkCyan': '#0E8784',
        'darkGrayBlue': '#333D4B',
        'paleOrange': '#FDD6BA',
        'lightCream': '#FEFCF7',
        'gray': '#83888F'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
