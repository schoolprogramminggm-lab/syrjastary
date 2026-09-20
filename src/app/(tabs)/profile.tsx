import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ProfileHeader } from '@/components/profile/ProfileHeader';
import { QuestList } from '@/components/profile/QuestList';
import { SettingsSection } from '@/components/profile/SettingsSection';
import { StatsBlock } from '@/components/profile/StatsBlock';
import {
  accountItems,
  profileStats,
  profileUser,
  quests,
  systemItems,
} from '@/services/mock/profile';

export default function ProfileScreen() {
  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-surface">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="px-5 pb-[110px] pt-[14px]"
      >
        <ProfileHeader user={profileUser} />
        <StatsBlock stats={profileStats} />
        <QuestList quests={quests} activeCountLabel="3 активных" />
        <SettingsSection title="Аккаунт" items={accountItems} />
        <SettingsSection title="Система" items={systemItems} />
      </ScrollView>
    </SafeAreaView>
  );
}
