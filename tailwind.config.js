const { fontFamily } = require('tailwindcss/defaultTheme')
const typography = require('@tailwindcss/typography')

module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mulish', ...fontFamily.sans],
        mono: ['JetBrains Mono', ...fontFamily.mono]
      }
    }
  },

  variants: {
    extend: {
      cursor: ['disabled'],
      translate: ['group-hover']
    }
  },
  plugins: [typography]
}
