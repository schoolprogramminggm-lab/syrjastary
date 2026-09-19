import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Badge, FEED_TYPE_CONFIG } from '@/components/ui/Badge';
import type { FeedItem } from '@/types/feed';

interface FeedCardProps {
  item: FeedItem;
}

export function FeedCard({ item }: FeedCardProps) {
  const config = FEED_TYPE_CONFIG[item.type];

  return (
    <View className="mb-3 rounded-[22px] border border-border bg-white p-4">
      <View className="flex-row gap-[14px]">
        <View
          className={`h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[15px] ${config.softClassName}`}
        >
          <Feather name={config.icon} size={22} color={config.iconColor} />
        </View>

        <View className="shrink grow">
          <Badge type={item.type} />
          <Text className="mt-[7px] text-[15px] font-bold leading-[1.3] text-ink">
            {item.title}
          </Text>
          <View className="mt-2 flex-row items-center gap-3">
            {item.meta.map((meta) => (
              <Text
                key={meta.label}
                className={
                  meta.highlight
                    ? 'text-[12px] font-bold text-primary'
                    : 'text-[12px] font-medium text-subtle'
                }
              >
                {meta.label}
              </Text>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}
