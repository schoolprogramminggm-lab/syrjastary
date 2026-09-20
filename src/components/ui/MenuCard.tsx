import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { ProjectColors } from '@/constants/colors';
import type { MenuItem, MenuItemColor } from '@/types/menu';

interface ColorPalette {
  softClassName: string;
  textClassName: string;
  /**
   * То же значение, что и textClassName, но как реальный цвет: иконки
   * @expo/vector-icons принимают только prop `color`, не className/style.
   * Источник значения всё равно один — src/constants/colors.ts.
   */
  iconColor: string;
}

const COLOR_PALETTE: Record<MenuItemColor, ColorPalette> = {
  blue: {
    softClassName: 'bg-blueSoft',
    textClassName: 'text-blue',
    iconColor: ProjectColors.blue,
  },
  orange: {
    softClassName: 'bg-orangeSoft',
    textClassName: 'text-orangeText',
    iconColor: ProjectColors.orangeText,
  },
  primary: {
    softClassName: 'bg-primarySoft',
    textClassName: 'text-primaryDark',
    iconColor: ProjectColors.primaryDark,
  },
};

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  const palette = COLOR_PALETTE[item.color];

  return (
    <View className="mb-3 flex-1 rounded-[22px] border border-border bg-white p-4">
      <View className="mb-4 flex-row items-start justify-between">
        <View
          className={`h-[46px] w-[46px] items-center justify-center rounded-2xl ${palette.softClassName}`}
        >
          <Feather name={item.icon} size={23} color={palette.iconColor} />
        </View>

        {item.badgeKind === 'count' ? (
          <View className={`rounded-[9px] px-[10px] py-[3px] ${palette.softClassName}`}>
            <Text className={`text-[13px] font-bold ${palette.textClassName}`}>{item.count}</Text>
          </View>
        ) : (
          <View className="flex-row items-center gap-[5px] rounded-[9px] bg-primarySoft px-[9px] py-1">
            <View className="h-[6px] w-[6px] rounded-full bg-primary" />
            <Text className="text-[11px] font-bold text-primaryDark">{item.statusLabel}</Text>
          </View>
        )}
      </View>

      <Text className="text-[15.5px] font-bold text-ink">{item.title}</Text>
      <Text className="mt-[2px] text-[12px] font-medium text-subtle">{item.subtitle}</Text>
    </View>
  );
}
