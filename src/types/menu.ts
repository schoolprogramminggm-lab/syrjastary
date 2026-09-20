import type { ComponentProps } from 'react';
import type { Feather } from '@expo/vector-icons';

type FeatherIconName = ComponentProps<typeof Feather>['name'];

export type MenuItemColor = 'blue' | 'orange' | 'primary';

interface MenuItemBase {
  id: string;
  icon: FeatherIconName;
  title: string;
  subtitle: string;
  color: MenuItemColor;
}

/** Карточка с числовым бейджем (18, 42, 24…). */
export interface MenuItemCount extends MenuItemBase {
  badgeKind: 'count';
  count: number;
}

/** Карточка со статус-бейджем (например «online» у Чата). */
export interface MenuItemStatus extends MenuItemBase {
  badgeKind: 'status';
  statusLabel: string;
}

export type MenuItem = MenuItemCount | MenuItemStatus;
