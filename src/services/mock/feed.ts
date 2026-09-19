import type { FeedItem } from '@/types/feed';

// Моковые данные ленты — три карточки, ровно как в макете
// design_handoff_jastar_mobile/Jastar-iOS.dc.html, секция HOME.
// Реальный источник — src/services/, когда появится Supabase-запрос.
export const feedItems: FeedItem[] = [
  {
    id: '1',
    type: 'job',
    title: 'Специалист по цифровым коммуникациям',
    meta: [{ label: 'Алматы' }, { label: 'от 250 000 ₸' }],
  },
  {
    id: '2',
    type: 'grant',
    title: 'Государственная стипендия «Болашак»',
    meta: [{ label: 'до 31 июля' }, { label: '+50 баллов', highlight: true }],
  },
  {
    id: '3',
    type: 'program',
    title: 'Президентская молодёжная кадровая программа',
    meta: [{ label: 'По всему Казахстану' }],
  },
];
