
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        coral: {
          DEFAULT: '#FF9B85',
          light: '#FFBCAE',
        },
        teal: {
          DEFAULT: '#6B9B9E',
          light: '#8FBFC2',
        },
        beige: {
          DEFAULT: '#E8DCC4',
          light: '#F5EFE0',
        },
        charcoal: '#2B2D2F',
        offwhite: '#FAFAF9',
      },
      fontFamily: {
        heading: ['"Outfit"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
