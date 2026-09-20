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
  // Ниже — токены, которых нет в сокращённой таблице CLAUDE.md, но которые
  // есть в детальном дизайн-хендоффе (design_handoff_jastar_mobile/README.md)
  // и нужны для точного соответствия макету экрана «Главная»: мягкие
  // подложки бейджей вакансии/гранта и вторичный текст чипов.
  orangeSoft: '#FFEAD5',
  orangeText: '#C2410C',
  blueSoft: '#E0ECFF',
  textSecondary: '#4A554E',
  danger: '#EF4444',
  // Цвет таймстемпов ("2 часа назад") на экране «Уведомления». В отличие
  // от остальных добавленных токенов, в таблице README.md его нет — он
  // встречается только как inline-значение в самих HTML-макетах (проверено
  // по обоим файлам, Jastar-iOS.dc.html и Jastar-Android.dc.html).
  timestamp: '#B4BEB6',
  // Экран «QR-сканер»: тёмный фон экрана и стрелки/второстепенный текст
  // на нём. darkScreenBg и chevron — из таблицы README.md. darkMuted
  // (подпись-подсказка под рамкой) там не документирован, как и
  // timestamp выше — источник тот же, сырое значение из HTML-макетов.
  darkScreenBg: '#0A0D0B',
  darkMuted: '#8B968E',
  chevron: '#C5CFC8',
} as const;

export type ProjectColor = keyof typeof ProjectColors;
