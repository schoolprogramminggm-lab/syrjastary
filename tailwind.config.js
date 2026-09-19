/** @type {import('tailwindcss').Config} */
const { ProjectColors } = require('./src/constants/colors');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    // Числовая шкала font-weight (font-thin…font-black) переопределена
    // пустой: React Native требует отдельный файл шрифта на каждое
    // начертание, а не синтетическое утолщение по fontWeight, поэтому
    // font-bold ниже — это font-family-утилита (Manrope Bold), а не
    // числовой вес. См. CLAUDE.md → «Дизайн» → «Шрифты».
    fontWeight: {},
    extend: {
      colors: ProjectColors,
      fontFamily: {
        display: ['SpaceGrotesk_700Bold'],
        sans: ['Manrope_400Regular'],
        bold: ['Manrope_700Bold'],
        medium: ['Manrope_500Medium'],
      },
    },
  },
  plugins: [],
};
