import type { ComponentProps } from 'react';
import type { Feather } from '@expo/vector-icons';

type FeatherIconName = ComponentProps<typeof Feather>['name'];

export type NotificationColor = 'blue' | 'orange' | 'primary';

export interface Notification {
  id: string;
  icon: FeatherIconName;
  color: NotificationColor;
  title: string;
  body: string;
  timeAgo: string;
  read: boolean;
  /**
   * Упрощение для мока: реальный бэкенд отдаёт дату создания, а группу
   * «Сегодня»/«Ранее» экран считал бы по ней сам. Здесь — уже готовая
   * группа, без даты и без вычислений на клиенте.
   */
  period: 'today' | 'earlier';
}
