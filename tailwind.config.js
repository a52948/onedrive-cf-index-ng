const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const siteConfig = require('./config/site.json')

module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.zinc,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.green,
      blue: colors.sky,
      indigo: colors.indigo,
      purple: colors.purple,
      pink: colors.pink
    },
    extend: {
      fontFamily: {
        sans: [`"${siteConfig.googleFont}"`, '"Noto Sans SC"', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        gray: {
          850: '#2E2E34'
        }
      }
    }
  },
  plugins: [],
}
