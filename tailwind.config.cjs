/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['ProximaNova', 'arial', 'Helvetica Neue', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      orange: {
        DEFAULT: '#FC8019',
        light: '#DB7C38',
        pale: '#E1B055',
      },
      gray: {
        thin: '#EDF1F7',
        light: '#686B78',
        DEFAULT: '#808080',
        medium: '#3D4152',
        dark: '#171A29',
        ultra: '#282C3F',
        shimmer: '#e5e7eb',
      },
      red: '#FF6161',
      white: '#FFFFFF',
      black: '#000000',
      green: { DEFAULT: '#48C479', dark: '#3d9b6d' },
      brown: '#8A584B',
      cyan: '#5D8Ed5',
      blue: `#37718e`,
    },
  },
  plugins: [],
};
