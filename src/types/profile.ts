import type { ComponentProps } from 'react';
import type { Feather } from '@expo/vector-icons';

type FeatherIconName = ComponentProps<typeof Feather>['name'];

export interface ProfileUser {
  initials: string;
  name: string;
  status: string;
  city: string;
}

export interface ProfileStats {
  xp: number;
  level: number;
  xpProgressPercent: number;
  xpTarget: number;
  xpRemaining: number;
  coins: number;
}

export type QuestAccent = 'blue' | 'primary';

export interface Quest {
  id: string;
  icon: FeatherIconName;
  accentColor: QuestAccent;
  title: string;
  statusLabel: string;
  progressPercent: number;
  rewardXp: number;
  rewardCoins: number;
  completed: boolean;
}

export type SettingsItemColor = 'primary' | 'blue' | 'orange' | 'neutral';

export interface SettingsItem {
  id: string;
  icon: FeatherIconName;
  iconColor: SettingsItemColor;
  label: string;
  value?: string;
  danger?: boolean;
}
