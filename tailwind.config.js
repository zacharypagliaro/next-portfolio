/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./files/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    typography: {
      DEFAULT: {
        css: {
          color: '#9191A4',
          a: {
            // change anchor color and on hover
            textDecoration: 'underline',
            color: '#9191A4',
            '&:hover': { // could be any. It's like extending css selector
              color: '#3F3FFF',
            },
          },
        }
      }
    },
    extend: {
      colors: {
        'body': '#17171F',
        'selected-text': '#A3A3FF',
        'theme': '#3F3FFF',
        'nav': '#404053',
        'secondary': '#9191A4',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input': '#2A2A35',
        'one': '#40FFD9',
        'two': '#3F3FFF',
        'three': '#FF40D9',
        'patreon': '#FFFFFF'
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif']
      }
    },
  },
  variants: {
    fill: ['hover', 'focus'], // this line does the trick
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
