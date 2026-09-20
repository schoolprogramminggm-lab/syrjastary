import { FlatList, Text, View } from 'react-native';
import type { ListRenderItem } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { ProjectColors } from '@/constants/colors';
import type { SettingsItem, SettingsItemColor } from '@/types/profile';

const ICON_SOFT: Record<SettingsItemColor, string> = {
  primary: 'bg-primarySoft',
  blue: 'bg-blueSoft',
  orange: 'bg-orangeSoft',
  neutral: 'bg-surface',
};

// Реальный цвет для prop `color` у @expo/vector-icons — источник тот же
// ProjectColors, что и для Tailwind-классов выше.
const ICON_COLOR: Record<SettingsItemColor, string> = {
  primary: ProjectColors.primary,
  blue: ProjectColors.blue,
  orange: ProjectColors.orangeText,
  neutral: ProjectColors.textSecondary,
};

function Row({ item }: { item: SettingsItem }) {
  const isDanger = item.danger === true;

  return (
    <View className="flex-row items-center gap-[14px] px-4 py-[15px]">
      <View
        className={`h-[38px] w-[38px] items-center justify-center rounded-xl ${
          isDanger ? 'bg-dangerSoft' : ICON_SOFT[item.iconColor]
        }`}
      >
        <Feather
          name={item.icon}
          size={19}
          color={isDanger ? ProjectColors.dangerText : ICON_COLOR[item.iconColor]}
        />
      </View>
      <Text
        className={
          isDanger
            ? 'flex-1 text-[14.5px] font-medium text-dangerText'
            : 'flex-1 text-[14.5px] font-medium text-ink'
        }
      >
        {item.label}
      </Text>
      {item.value && <Text className="mr-1 text-[12.5px] font-bold text-subtle">{item.value}</Text>}
      {!isDanger && <Feather name="chevron-right" size={16} color={ProjectColors.chevron} />}
    </View>
  );
}

const renderRow: ListRenderItem<SettingsItem> = ({ item }) => <Row item={item} />;
const keyById = (item: SettingsItem) => item.id;
const Separator = () => <View className="ml-[68px] h-px bg-divider" />;

interface SettingsSectionProps {
  title: string;
  items: SettingsItem[];
}

export function SettingsSection({ title, items }: SettingsSectionProps) {
  return (
    <View className="mb-[22px]">
      <Text className="mb-3 text-[12px] font-bold uppercase tracking-[0.12em] text-subtle">
        {title}
      </Text>
      <View className="overflow-hidden rounded-[22px] border border-border bg-white">
        <FlatList
          data={items}
          keyExtractor={keyById}
          renderItem={renderRow}
          ItemSeparatorComponent={Separator}
          scrollEnabled={false}
        />
      </View>
    </View>
  );
}
