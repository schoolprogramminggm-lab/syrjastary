import type { ComponentProps } from 'react';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { ProjectColors } from '@/constants/colors';
import type { FeedItemType } from '@/types/feed';

type FeatherIconName = ComponentProps<typeof Feather>['name'];

interface FeedTypeConfig {
  label: string;
  icon: FeatherIconName;
  /** Фон бейджа и миниатюры карточки — Tailwind-класс. */
  softClassName: string;
  /** Цвет текста бейджа — Tailwind-класс. */
  textClassName: string;
  /**
   * То же значение, что и textClassName, но как реальный цвет: иконки
   * @expo/vector-icons принимают только prop `color`, а не className/style,
   * поэтому NativeWind тут не применить напрямую. Значение всё равно
   * берётся из единственного источника — src/constants/colors.ts, а не
   * пишется как hex-литерал в JSX.
   */
  iconColor: string;
}

export const FEED_TYPE_CONFIG: Record<FeedItemType, FeedTypeConfig> = {
  event: {
    label: 'МЕРОПРИЯТИЕ',
    icon: 'calendar',
    softClassName: 'bg-orangeSoft',
    textClassName: 'text-orangeText',
    iconColor: ProjectColors.orangeText,
  },
  job: {
    label: 'ВАКАНСИЯ',
    icon: 'briefcase',
    softClassName: 'bg-orangeSoft',
    textClassName: 'text-orangeText',
    iconColor: ProjectColors.orangeText,
  },
  grant: {
    label: 'ГРАНТ',
    icon: 'award',
    softClassName: 'bg-blueSoft',
    textClassName: 'text-blue',
    iconColor: ProjectColors.blue,
  },
  program: {
    label: 'ПРОГРАММА',
    icon: 'flag',
    softClassName: 'bg-primarySoft',
    textClassName: 'text-primaryDark',
    iconColor: ProjectColors.primaryDark,
  },
};

interface BadgeProps {
  type: FeedItemType;
}

export function Badge({ type }: BadgeProps) {
  const config = FEED_TYPE_CONFIG[type];
  return (
    <View className={`self-start rounded-[7px] px-[9px] py-1 ${config.softClassName}`}>
      <Text className={`text-[10px] font-bold tracking-[0.04em] ${config.textClassName}`}>
        {config.label}
      </Text>
    </View>
  );
}
