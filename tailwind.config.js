/** @type {import('tailwindcss').Config} */
const { ProjectColors } = require('./src/constants/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: ProjectColors,
    },
  },
  plugins: [],
};
