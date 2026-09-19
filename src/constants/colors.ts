/**
 * Палитра проекта «Жастар» (см. CLAUDE.md → «Дизайн» → «Палитра»).
 *
 * Единственный источник истины для этих hex-значений. Специально вынесена
 * в отдельный файл без единого импорта: tailwind.config.js подключает её
 * напрямую через require('./src/constants/colors'), выполняя файл в
 * обычном Node (через jiti), а не через Metro/Babel — любой импорт
 * `react-native` или path-алиас `@/*` там неразрешим и ломает сборку.
 * theme.ts реэкспортирует эти же значения для использования в компонентах.
 */
export const ProjectColors = {
  primary: '#15B364',
  primaryDark: '#0E8A4B',
  primarySoft: '#DCFCE7',
  orange: '#FB8B2D',
  blue: '#1E63DA',
  ink: '#0E1512',
  muted: '#6B7770',
  subtle: '#9AA59D',
  surface: '#F3F5F1',
  border: '#E6EAE4',
} as const;

export type ProjectColor = keyof typeof ProjectColors;
