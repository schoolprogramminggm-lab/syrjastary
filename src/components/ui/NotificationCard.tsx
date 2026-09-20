import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { ProjectColors } from '@/constants/colors';
import type { Notification, NotificationColor } from '@/types/notification';

interface ColorPalette {
  softClassName: string;
  /**
   * То же значение, что и softClassName, но как реальный цвет: иконки
   * @expo/vector-icons принимают только prop `color`, не className/style.
   * Источник значения всё равно один — src/constants/colors.ts.
   */
  iconColor: string;
}

const COLOR_PALETTE: Record<NotificationColor, ColorPalette> = {
  blue: { softClassName: 'bg-blueSoft', iconColor: ProjectColors.blue },
  orange: { softClassName: 'bg-orangeSoft', iconColor: ProjectColors.orangeText },
  primary: { softClassName: 'bg-primarySoft', iconColor: ProjectColors.primaryDark },
};

interface NotificationCardProps {
  notification: Notification;
}

export function NotificationCard({ notification }: NotificationCardProps) {
  const palette = COLOR_PALETTE[notification.color];

  return (
    <View
      className={
        notification.read
          ? 'relative mb-[10px] rounded-[20px] border border-border bg-white p-4'
          : 'relative mb-[10px] rounded-[20px] border border-primarySoft bg-white p-4'
      }
    >
      {!notification.read && (
        <View className="absolute bottom-4 left-0 top-4 w-[3px] rounded-full bg-primary" />
      )}

      <View className="flex-row gap-[13px]">
        <View
          className={`h-[44px] w-[44px] shrink-0 items-center justify-center rounded-2xl ${palette.softClassName}`}
        >
          <Feather name={notification.icon} size={22} color={palette.iconColor} />
        </View>

        <View className="shrink grow">
          <View className="flex-row items-center gap-[6px]">
            <Text className="shrink grow text-[14px] font-bold text-ink">
              {notification.title}
            </Text>
            {!notification.read && <View className="h-2 w-2 shrink-0 rounded-full bg-primary" />}
          </View>
          <Text className="mt-[3px] font-sans text-[13px] leading-[1.4] text-muted">
            {notification.body}
          </Text>
          <Text className="mt-[6px] text-[11px] font-medium text-timestamp">
            {notification.timeAgo}
          </Text>
        </View>
      </View>
    </View>
  );
}
