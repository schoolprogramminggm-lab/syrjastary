import type { ProfileStats, ProfileUser, Quest, SettingsItem } from '@/types/profile';

// Всё ровно как в макете design_handoff_jastar_mobile/Jastar-iOS.dc.html,
// секция PROFILE. Реальный источник — src/services/, когда появится Supabase.
export const profileUser: ProfileUser = {
  initials: 'АН',
  name: 'Аян Нұрлан',
  status: 'Активист',
  city: 'Алматы',
};

export const profileStats: ProfileStats = {
  xp: 1240,
  level: 4,
  xpProgressPercent: 68,
  xpTarget: 1500,
  xpRemaining: 260,
  coins: 505,
};

export const quests: Quest[] = [
  {
    id: 'events',
    icon: 'calendar',
    accentColor: 'blue',
    title: 'Посети 3 мероприятия',
    statusLabel: 'Осталось 1 мероприятие',
    progressPercent: 66,
    rewardXp: 80,
    rewardCoins: 20,
    completed: false,
  },
  {
    id: 'resume',
    icon: 'file-text',
    accentColor: 'primary',
    title: 'Заполни резюме до конца',
    statusLabel: 'Готово на 80%',
    progressPercent: 80,
    rewardXp: 50,
    rewardCoins: 10,
    completed: false,
  },
  {
    id: 'invite',
    icon: 'check',
    accentColor: 'primary',
    title: 'Пригласи друга',
    statusLabel: 'Выполнено · награда получена',
    progressPercent: 100,
    rewardXp: 100,
    rewardCoins: 30,
    completed: true,
  },
];

export const accountItems: SettingsItem[] = [
  { id: 'my-profile', icon: 'user', iconColor: 'primary', label: 'Мой профиль' },
  { id: 'tickets', icon: 'credit-card', iconColor: 'blue', label: 'Мои билеты' },
  { id: 'orders', icon: 'shopping-bag', iconColor: 'orange', label: 'Мои заказы' },
  { id: 'qr-cards', icon: 'maximize', iconColor: 'blue', label: 'Сохранённые QR-визитки' },
  { id: 'favorites', icon: 'heart', iconColor: 'primary', label: 'Избранное' },
  { id: 'credentials', icon: 'lock', iconColor: 'orange', label: 'Данные входа' },
];

export const systemItems: SettingsItem[] = [
  { id: 'settings', icon: 'settings', iconColor: 'neutral', label: 'Настройки' },
  { id: 'language', icon: 'globe', iconColor: 'neutral', label: 'Язык', value: 'Русский' },
  { id: 'support', icon: 'help-circle', iconColor: 'neutral', label: 'Поддержка' },
  { id: 'about', icon: 'info', iconColor: 'neutral', label: 'О приложении' },
  { id: 'logout', icon: 'log-out', iconColor: 'neutral', label: 'Выйти', danger: true },
];
