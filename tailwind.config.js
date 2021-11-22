const { fontFamily } = require('tailwindcss/defaultTheme')
const typography = require('@tailwindcss/typography')

module.exports = {
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mulish', ...fontFamily.sans],
        mono: ['JetBrains Mono', ...fontFamily.mono]
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline'
              }
            }
          }
        }
      }
    }
  },
  variants: {},
  plugins: [typography]
}
