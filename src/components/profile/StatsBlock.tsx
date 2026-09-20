import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { ProjectColors } from '@/constants/colors';
import type { ProfileStats } from '@/types/profile';

function formatNumber(value: number): string {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

interface StatsBlockProps {
  stats: ProfileStats;
}

export function StatsBlock({ stats }: StatsBlockProps) {
  return (
    <View className="mb-3 flex-row gap-3">
      {/* XP */}
      <View className="relative flex-1 overflow-hidden rounded-[22px] bg-ink p-[18px]">
        <View className="absolute -right-6 -top-6 h-[90px] w-[90px] rounded-full bg-primary/10" />
        <View className="mb-3 flex-row items-center gap-2">
          <View className="h-[30px] w-[30px] items-center justify-center rounded-[10px] bg-primary">
            <Text className="font-display text-[11px] text-white">XP</Text>
          </View>
          <Text className="text-[12px] font-bold text-subtle">Прогресс</Text>
        </View>
        <View className="flex-row items-baseline gap-[6px]">
          <Text className="font-display text-[30px] leading-none text-white">
            {formatNumber(stats.xp)}
          </Text>
          <Text className="text-[12px] font-bold text-primary">ур. {stats.level}</Text>
        </View>
        <View className="my-[12px] h-[7px] overflow-hidden rounded-full bg-white/10">
          <View
            className="h-full rounded-full bg-primary"
            style={{ width: `${stats.xpProgressPercent}%` }}
          />
        </View>
        <Text className="text-[11px] font-bold text-subtle">
          {formatNumber(stats.xp)} / {formatNumber(stats.xpTarget)} · до ур. {stats.level + 1} —{' '}
          <Text className="text-white">{stats.xpRemaining} XP</Text>
        </Text>
      </View>

      {/* Жас-коины */}
      <View className="relative flex-1 overflow-hidden rounded-[22px] border border-border bg-white p-[18px]">
        <View className="absolute -right-6 -top-6 h-[90px] w-[90px] rounded-full bg-orange/10" />
        <View className="mb-3 flex-row items-center gap-2">
          <View className="h-[30px] w-[30px] items-center justify-center rounded-full bg-orange">
            <Feather name="dollar-sign" size={15} color="white" />
          </View>
          <Text className="text-[12px] font-bold text-subtle">Жас-коины</Text>
        </View>
        <Text className="font-display text-[30px] leading-none text-ink">
          {formatNumber(stats.coins)}
        </Text>
        <View className="mt-[11px] flex-row items-center gap-[5px] self-start rounded-[9px] bg-orangeSoft px-[10px] py-[5px]">
          <Feather name="shopping-cart" size={12} color={ProjectColors.orangeText} />
          <Text className="text-[11px] font-bold text-orangeText">Обменять на мерч</Text>
        </View>
      </View>
    </View>
  );
}
