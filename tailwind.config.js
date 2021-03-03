const { fontFamily } = require('tailwindcss/defaultTheme')
const typography = require('@tailwindcss/typography')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: colors.violet,
        green: colors.emerald,
        blue: colors.lightBlue,
        red: colors.rose
      },
      gridTemplateColumns: {
        project: '1fr auto'
      },
      fontFamily: {
        sans: ['Mulish', ...fontFamily.sans],
        mono: ['JetBrains Mono', ...fontFamily.mono]
      }
    }
  },

  variants: {
    extend: {
      cursor: ['disabled']
    }
  },
  plugins: [typography]
}
