/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '25em',
      },
      height: {
        'header-mobile': '33.625rem',
        'header-desktop': '50rem',
        'section': '37.5rem',
      },
      fontFamily: {
        'primary': ["Barlow", "sans-serif"],
        'heading': ["Fraunces", "serif"],
      },
      fontWeight: {
        'bold': "700",
        'bolder': "900",
      },
      letterSpacing: {
        'heading': '.2em',
      },
      colors: {
        'custom-red': "hsl(7, 99%, 70%)",
        'custom-yellow': "hsl(51, 100%, 49%)",
        'custom-green': "hsl(167, 40%, 24%)",
        'custom-blue': "hsl(198, 62%, 26%)",
        'footer-text': "hsl(168, 34%, 41%)",
        'footer-bg': "hsl(167, 43%, 70%)",
        'desaturated-blue': "hsl(212, 27%, 19%)",
        'custom-dark-gray': "hsl(213, 9%, 39%)",
        'custom-gray': "hsl(232, 10%, 55%)",
        'custom-light-gray': "hsl(210, 4%, 67%)",
      },
      backgroundImage: {
        'header-mobile': "url('./images/mobile/image-header.jpg')",
        'header-desktop': "url('./images/desktop/image-header.jpg')",
        'graphic-design-mobile': "url('./images/mobile/image-graphic-design.jpg')",
        'graphic-design-desktop': "url('./images/desktop/image-graphic-design.jpg')",
        'photography-mobile': "url('./images/mobile/image-photography.jpg')",
        'photography-desktop': "url('./images/desktop/image-photography.jpg')",
      },
    },
  },
  plugins: [],
}
