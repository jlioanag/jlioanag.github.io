module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#f9f6f1',
      'l-purple': '#616794',
      'midnight': '#253031',
      'metal': '#51567b',
      'brown': '#404463',
      'silver': '#ece2d0',
      'coffee': '#e0b89b',
    },
    fontFamily: {
      'body': ['Courier'],
    },

    extend: {
      // backgroundImage: {
      //   'hero': "url('/public/images/who.jpg')",
      // },
    },
  },
  plugins: [],
}
