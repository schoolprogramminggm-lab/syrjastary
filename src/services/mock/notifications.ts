import type { Notification } from '@/types/notification';

// Четыре уведомления ровно как в макете design_handoff_jastar_mobile/Jastar-iOS.dc.html,
// секция NOTIFICATIONS. Реальный источник — src/services/, когда появится Supabase-запрос.
export const notifications: Notification[] = [
  {
    id: '1',
    icon: 'calendar',
    color: 'blue',
    title: 'Напоминание о мероприятии',
    body: 'Форум молодых предпринимателей начнётся через 2 дня — 15 июня в 10:00',
    timeAgo: '2 часа назад',
    read: false,
    period: 'today',
  },
  {
    id: '2',
    icon: 'briefcase',
    color: 'orange',
    title: 'Новая вакансия по интересам',
    body: 'Astana Hub ищет Junior Frontend Developer — от 250 000 ₸',
    timeAgo: '5 часов назад',
    read: false,
    period: 'today',
  },
  {
    id: '3',
    icon: 'check',
    color: 'primary',
    title: 'Заявка принята',
    body: 'Ваша заявка на программу «Жас Кәсіпкер» зарегистрирована',
    timeAgo: '1 день назад',
    read: true,
    period: 'earlier',
  },
  {
    id: '4',
    icon: 'volume-2',
    color: 'blue',
    title: 'Объявление центра',
    body: 'С 20 июня стартует летняя программа стажировок. Успейте подать заявку!',
    timeAgo: '2 дня назад',
    read: true,
    period: 'earlier',
  },
];
