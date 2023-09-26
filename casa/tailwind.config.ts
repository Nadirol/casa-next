/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'container': 'min(1320px, 100% - 4rem)',
        'search-bar': 'min(500px, 50%)'
      },

      colors: {
        ...colors,
        'primary-extra-light': 'rgba(218, 241, 249, 1)',
        'primary-light': 'rgba(56, 209, 209, 1)',
        'primary-regular': 'rgba(0,119,139,1)',
        'primary-dark': 'rgba(60, 96, 105, 1)',

        'secondary-light': 'rgba(156, 240, 48, 1)',

        'accent-light': 'rgba(209, 56, 84, 1)',

        'neutral-100': 'rgba(250, 250, 250, 1)',
        'neutral-300': 'rgba(240, 241, 242, 1)',
        'neutral-500': 'rgba(186, 194, 198, 1)',
        'neutral-600': 'rgba(154, 158, 166, 1)',
        'neutral-700': 'rgba(103, 105, 109, 1)',
        'neutral-800': 'rgba(72, 71, 71, 1)',
        
        'filter-dark': 'rgba(0, 0, 0, 0.4)',
        'filter-light': 'rgba(240, 240, 240, 0.1)',
      },
      boxShadow: {  
      },
      gridTemplateColumns: {
      },
      screens: {
        '-xl': { 'max': '1279px' } ,
        '-md': { 'max': '767px' } ,
        '-xs': { 'max': '300px' } ,
      },
      aspectRatio: {
      },
      transitionProperty: {
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/line-clamp'),
    // ...
  ]
}
