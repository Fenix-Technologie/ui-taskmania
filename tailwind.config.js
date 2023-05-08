/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        fontRegularColor: '#042C71'
      }
    },
    colors: {
      orange: {
        100: '#FFBC95',
        200: '#F36B1C',
        300: '#FF5E00'
      },
      notification: {
        warning: '#F06E67',
        changes: '#F7C374',
        progress: '#74BAFA',
        completed: '#80D465'
      }
    },
    fontFamily: {
      lexend: "font-family: 'Lexend', sans-serif;"
    }
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.text-regular': {
          color: '#042C71',
          fontWeight: '400',
          lineHeight: '22px',
          fontSize: '18px'
        },
        '.text-title': {
          color: '#042C71',
          fontWeight: '600',
          fontSize: '24px',
          lineHeight: '30px'
        }
      })
    })

  ]
}