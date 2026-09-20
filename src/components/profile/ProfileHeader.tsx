import { Pressable, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { ProjectColors } from '@/constants/colors';
import type { ProfileUser } from '@/types/profile';

interface ProfileHeaderProps {
  user: ProfileUser;
}

export function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <View>
      <View className="mb-5 flex-row items-center justify-between">
        <Text className="font-display text-[30px] tracking-[-0.02em] text-ink">Аккаунт</Text>
        <Pressable className="h-[42px] w-[42px] items-center justify-center rounded-2xl border border-border bg-white">
          <Feather name="settings" size={20} color={ProjectColors.ink} />
        </Pressable>
      </View>

      <View className="mb-3 flex-row items-center gap-4 rounded-[26px] border border-border bg-white p-[22px]">
        <View className="h-[68px] w-[68px] items-center justify-center rounded-[22px] bg-primary">
          <Text className="font-display text-[28px] text-white">{user.initials}</Text>
        </View>
        <View className="flex-1">
          <Text className="font-display text-xl text-ink">{user.name}</Text>
          <View className="mt-[6px] flex-row items-center gap-2">
            <View className="rounded-lg bg-primarySoft px-[10px] py-1">
              <Text className="text-[11px] font-bold text-primaryDark">{user.status}</Text>
            </View>
            <Text className="text-[12px] font-medium text-subtle">{user.city}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
