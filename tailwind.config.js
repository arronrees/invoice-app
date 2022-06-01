const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'light-purple': '#9277FF',
      'mid-purple': '#7C5DFA',
      'light-blue': '#7E88C3',
      'mid-blue': '#252945',
      'dark-blue': '#1E2139',
      'x-light-grey': '#F9FAFE',
      'light-grey': '#DFE3FA',
      'mid-grey': '#888EB0',
      'dark-grey': '#373B53',
      black: '#0C0E16',
      'light-red': '#FF9797',
      'mid-red': '#EC5757',
      'light-bg': '#F8F8FB',
      'dark-bg': '#141625',
      green: '#33D69F',
      'light-green': '#33d6a00f',
      orange: '#FF8F00',
      'light-orange': '#ff91000f',
      white: '#fff',
      transparent: 'rgba(0,0,0,0)',
    },
    fontFamily: {
      sans: ['League Spartan', 'sans-serif'],
    },
    screens: {
      xs: '400px',
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
