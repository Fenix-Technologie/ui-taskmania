/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          10: '#C1EAFC',
          10: '#C1EAFC',
          100: '#3060B2',
          800: '#015C86',
          900: '#015C86',
          900: '#042C71'
        },
        fontRegularColor: '#042C71',
        orange: {
          100: '#FFBC95',
          200: '#F36B1C',
          300: '#FF5E00'
        },
        gray: {
          20: '#F0F0F0',
          40: '#e8e8e8',
          49: '#EBEBEB',
          50: '#CECECE',
          90: '#B0B0B0',
          95: '#AEAEAE',
          98: '#9A9A9A',
          99: '#B8B8B8',
          120: '#404040',
          995: '#0C0C0C'
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
        '.text-about': {
          color: '#404040',
          fontWeight: '400',
          fontSize: '12px',
          lineHeight: '16px',
        },
        '.text-title': {
          color: '#042C71',
          fontWeight: '600',
          fontSize: '24px',
          lineHeight: '30px'
        },
        '.text-title-about': {
          color: '#042C71',
          fontWeight: '700',
          fontSize: '16px',
          lineHeight: '20px'
        },
        '.text-menuTitle': {
          color: '#ffff',
          fontWeight: '500',
          lineHeight: '16px',
          fontSize: '14px',
        },
        '.text-shadow': {
          textShadow: '#000 1px 1px 0'
        },
      })
    }),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ]
}

