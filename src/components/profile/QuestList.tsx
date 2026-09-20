import { FlatList, Text, View } from 'react-native';
import type { ListRenderItem } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { ProjectColors } from '@/constants/colors';
import type { Quest } from '@/types/profile';

const ACCENT_BAR: Record<Quest['accentColor'], string> = {
  blue: 'bg-blue',
  primary: 'bg-primary',
};

const ACCENT_SOFT: Record<Quest['accentColor'], string> = {
  blue: 'bg-blueSoft',
  primary: 'bg-primarySoft',
};

// Значения нужны как реальный цвет для prop `color` у @expo/vector-icons
// (className там неприменим), источник — тот же ProjectColors.
const ACCENT_ICON_COLOR: Record<Quest['accentColor'], string> = {
  blue: ProjectColors.blue,
  primary: ProjectColors.primaryDark,
};

function QuestCard({ quest }: { quest: Quest }) {
  return (
    <View
      className={
        quest.completed
          ? 'rounded-2xl border border-primarySoft bg-primaryTint p-[14px]'
          : 'rounded-2xl border border-border p-[14px]'
      }
    >
      <View className="flex-row items-center gap-3">
        <View
          className={
            quest.completed
              ? 'h-10 w-10 items-center justify-center rounded-[13px] bg-primary'
              : `h-10 w-10 items-center justify-center rounded-[13px] ${ACCENT_SOFT[quest.accentColor]}`
          }
        >
          <Feather
            name={quest.icon}
            size={20}
            color={quest.completed ? 'white' : ACCENT_ICON_COLOR[quest.accentColor]}
          />
        </View>

        <View className="flex-1">
          <Text className="text-[13.5px] font-bold text-ink">{quest.title}</Text>
          <Text
            className={
              quest.completed
                ? 'mt-[2px] text-[11.5px] font-bold text-primaryDark'
                : 'mt-[2px] text-[11.5px] font-bold text-subtle'
            }
          >
            {quest.statusLabel}
          </Text>
        </View>

        <View className={quest.completed ? 'flex-row gap-[5px] opacity-55' : 'flex-row gap-[5px]'}>
          <View className="rounded-[7px] bg-primarySoft px-2 py-1">
            <Text className="text-[10.5px] font-bold text-primaryDark">+{quest.rewardXp} XP</Text>
          </View>
          <View className="rounded-[7px] bg-orangeSoft px-2 py-1">
            <Text className="text-[10.5px] font-bold text-orangeText">+{quest.rewardCoins}</Text>
          </View>
        </View>
      </View>

      {!quest.completed && (
        <View className="mt-[10px] h-[6px] overflow-hidden rounded-[3px] bg-surface">
          <View
            className={`h-full rounded-[3px] ${ACCENT_BAR[quest.accentColor]}`}
            style={{ width: `${quest.progressPercent}%` }}
          />
        </View>
      )}
    </View>
  );
}

const renderQuest: ListRenderItem<Quest> = ({ item }) => <QuestCard quest={item} />;
const keyById = (item: Quest) => item.id;
const Separator = () => <View className="h-[10px]" />;

interface QuestListProps {
  quests: Quest[];
  activeCountLabel: string;
}

export function QuestList({ quests, activeCountLabel }: QuestListProps) {
  return (
    <View className="mb-[22px] rounded-[22px] border border-border bg-white p-[18px]">
      <View className="mb-[14px] flex-row items-center justify-between">
        <View className="flex-row items-center gap-2">
          <Text className="text-[15px] font-bold text-ink">Квесты</Text>
          <View className="rounded-lg bg-primarySoft px-[9px] py-[3px]">
            <Text className="text-[11px] font-bold text-primaryDark">{activeCountLabel}</Text>
          </View>
        </View>
        <Text className="text-[12px] font-medium text-primary">Все →</Text>
      </View>

      <FlatList
        data={quests}
        keyExtractor={keyById}
        renderItem={renderQuest}
        ItemSeparatorComponent={Separator}
        scrollEnabled={false}
      />
    </View>
  );
}
