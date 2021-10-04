module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'darkCyan': '#0E8784',
        'viking': '#66d2cf',
        'darkGrayBlue': '#333D4B',
        'gray': '#83888F',
        'paleOrange': '#FDD6BA',
        'lightCream': '#FEFCF7',
        'white': '#ffffff',
      },
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
        'fraunces': ['Fraunces', 'sans-serif'],
      },
      fontSize: {
        'heroTitleDesktop': '72px',
        'heroTitleTablet': '48px',
        'heroTitleMobile': '40px',
        'collectionTitle': '24px',
        'collectionDescription': '15px',
        'collectionDesktop': '150px',
        'collectionTablet': '96px',
        'collectionMobile': '40px'
      },
      backgroundImage: {
        'heroMobileImg': "url('/src/img/heroMobile.jpg')" ,
        'heroTabletImg': "url('/src/img/heroTablet.jpg')",
        'heroDesktopImg': "url('/src/img/heroDesktop.jpg')",
      },
      maxWidth: {
        'collectionCoffee': '200px',
        'collectionDescTablet': '282px',
        'collectionDescDesktop': '255px'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
