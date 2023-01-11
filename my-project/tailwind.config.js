/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-pearl': {
          '50': '#f2f3f4', 
          '100': '#e6e7e9', 
          '200': '#bfc4c7', 
          '300': '#99a0a6', 
          '400': '#4d5963', 
          '500': '#001220', 
          '600': '#00101d', 
          '700': '#000e18', 
          '800': '#000b13', 
          '900': '#000910'
        },
        'porcelain': {
          '50': '#f7f8f8',
          '100': '#edeeef',
          '200': '#d9dcde',
          '300': '#b9bdc0',
          '400': '#92999e',
          '500': '#757d82',
          '600': '#5e656b',
          '700': '#4d5257',
          '800': '#42464a',
          '900': '#3a3d40',
      },
      }
    },
    fontFamily: {
      Roboto: ['Roboto Condensed','sans-serif'],
      Roboto_Flex: ['Roboto Flex','sans-serif']
    },
    backgroundImage: {
      'hero': "url('./assets/backgrounds/001.png')",
      'blue-wave':"url('./assets/backgrounds/Blue-Wave-bg.svg')",
      'orange-wave':"url('./assets/backgrounds/Blue-Wave-bg.svg')",
      'world-map':"url('./assets/backgrounds/World-Map.svg')",

    },
  },
  plugins: [],
}