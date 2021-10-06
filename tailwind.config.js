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
        'isabelline': '#F4F1EB',
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
        'collectionMobile': '40px',
        'featuresTitleDesktop': '40px',
        'featuresTitleTablet': '32px',
        'featuresTitleMobile': '28px',
      },
      backgroundImage: {
        'heroMobileImg': "url('/src/img/heroMobile.jpg')" ,
        'heroTabletImg': "url('/src/img/heroTablet.jpg')",
        'heroDesktopImg': "url('/src/img/heroDesktop.jpg')",
        'aboutHeroMobileImg': "url('/src/img/aboutHeroMobile.jpg')" ,
        'aboutHeroTabletImg': "url('/src/img/aboutHeroTablet.jpg')",
        'aboutHeroDesktopImg': "url('/src/img/aboutHeroDesktop.jpg')",
        'subsHeroMobileImg': "url('/src/img/subsHeroMobile.jpg')",
        'subsHeroTabletImg': "url('/src/img/subsHeroTablet.jpg')",
        'subsHeroDesktopImg': "url('/src/img/subsHeroDesktop.jpg')",
        'stepsMobileImg': "url('/src/img/stepsMobile.png')",
        'stepsTabletImg': "url('/src/img/stepsTablet.png')",
        'stepsDesktopImg': "url('/src/img/stepsDesktop.png')",
        'bgModal': "url('/src/img/bg-modal-top.png')"
      },
      maxWidth: {
        'collectionCoffee': '200px',
        'collectionDescTablet': '282px',
        'collectionDescDesktop': '255px',
        'collectionCard': '280px',
        'collectionCardTablet': '570px',
        'collectionCardDesktop': '380px',
        'collectionCardIcon': '72px'
      },
      height: {
        'collectionCard': '380px',
        'collectionCardTablet': '180px',
        'collectionContainerMobile': '900px',
        'collectionContainer': '580px',
        'commitmentImg': '520px'
      },
      margin: {
        'collectionCardMarginBottomMobile': '48rem'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
