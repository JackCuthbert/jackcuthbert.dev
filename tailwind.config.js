const typography = require('@tailwindcss/typography')
module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },

  variants: {
    extend: {
      cursor: ['disabled']
    }
  },
  plugins: [typography]
}
