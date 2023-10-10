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
        'banner': 'min(1120px, 100% - 6rem)',
        'search-bar': 'min(500px, 75%)',
        'sidenav': 'min(24rem, 100% - 4rem)',
        'form': 'min(600px, 100% - 4rem)'
      },

      colors: {
        ...colors,
        'primary-extra-light': 'rgba(218, 241, 249, 1)',
        'primary-light': 'rgba(81, 193, 221, 1)',
        'primary-regular': 'rgba(31, 163, 196, 1)',
        'primary-dark': 'rgba(19, 137, 166, 1)',

        'secondary-light': 'rgba(156, 240, 48, 1)',

        'accent-light': 'rgba(209, 56, 84, 1)',

        'filter-medium-dark': 'rgba(0, 0, 0, 0.2)',
        'filter-dark': 'rgba(0, 0, 0, 0.4)',
        'filter-extra-dark': 'rgba(0, 0, 0, 0.8)',
        'filter-light': 'rgba(240, 240, 240, 0.1)',
      },
      boxShadow: {  
      },
      gridTemplateColumns: {
        'details': '6fr 4fr',
        'contact': '2fr 1fr'
      },
      screens: {
        '-xl': { 'max': '1279px' } ,
        '-md': { 'max': '767px' } ,
        '-xs': { 'max': '300px' } ,
        '2xl': { 'min': '1800px' }
      },
      aspectRatio: {
      },
      transitionProperty: {
      },
      keyframes: {
        'zoom': {
          '0%, 100%': {
            transform: 'translateY(-4%)',
          },
          '50%': {
            transform: 'translateY(0)',
          }
        },
        'fade-in': {
          '0%': { 'opacity': 0 },
          '100%': { 'opacity': 1 }
        },
        'fade-out': {
          '0%': { 'opacity': 1 },
          '100%': { 'opacity': 0 }
        },
        'slide-in-bl': {
          '0%': {
            'transform': 'translate(40%, 40%)',
            'opacity': 0
          },
          '100%': {
            'transform': 'translate(0, 0)',
            'opacity': 1
          },
        },
        'slide-in-from-right': {
          '0%': {
            'right': '30%',
          },
          '100%': {
            'right': '50%',
          },
        },
        'fade-in-up': {
          '0%': { 'opacity': 0, 'transform': 'translateY(20%)' },
          '100%': { 'opacity': 1, 'transform': 'translateY(0)' }
        },
      },
      animation: {
        'zoom': 'zoom 10s ease-in-out infinite',

        'fade-in': 'fade-in 1s ease-out',
        'fade-out': 'fade-out 1s ease-out',
        'slide-in-bl': 'slide-in-bl 0.5s ease-out',
        'slide-in-from-right': 'slide-in-from-right 1s ease-out',
        'fade-in-up': 'fade-in-up 1s ease-out',
      },
      backgroundImage: {
        'values': "url('../../public/assets/polygon-scatter-haikei.svg')"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-animated')
    // ...
  ]
}
