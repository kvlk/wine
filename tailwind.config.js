const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xl': '22px',
        '2xl': '24px',
        '3xl': '28px',
        '4xl': '32px',
      },
      height: {
        '150': '37.5rem',
        'w-screen': '100vw',
      },
      minWidth: {
        // w: (w) => {
        //   return !isNaN(w) 
        //     ? w / 4 + 'rem'
        //     : w
        // },
        '16': '4rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'xs': '0 4px 7px rgba(0, 0, 0, 0.05)',
      },
    },
    screens: {
      // min-width
      'xs': '320px',
      'sm': '360px',
      'md': '633px',
      'lg': '1024px',
      'xl': '1200px',
      '2xl': '1473px',
    },
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      'black': colors.black,
      'white': colors.white,
      'primary': colors.red,
      'red': {
        50: '#fbedef',
        100: '#f7d1d5',
        400: '#df6760',
        500: '#e35b4b',
        900: '#a73c31',
      },
      'blue': {
        50: '#e5eaf0',
        400: '#496b9b',
        600: '#1a4b84',
      },
      'gray': {
        50: '#fcfaf9',
        100: '#f7f5f4',
        200: '#f1f0ef',
        300: '#e4e3e2',
        400: '#c2c0bf',
        500: '#a3a2a1',
        600: '#797877',
        700: '#656463',
        800: '#464544',
        900: '#252423',
      }
    },
    fontFamily: {
      sans: ['system', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Segoe WP', 'Roboto', 'Ubuntu', 'Oxygen', 'Cantarell', 'Fira Sans', 'Helvetica Neue', 'Helvetica', 'Lucida Grande', 'Droid Sans', 'Tahoma', 'Microsoft Sans Serif', 'sans-serif'],
    },
  },
  plugins: [],
}