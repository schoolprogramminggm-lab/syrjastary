import { FlatList, Text, View } from 'react-native';
import type { ListRenderItem } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MenuCard } from '@/components/ui/MenuCard';
import { ProjectColors } from '@/constants/colors';
import { menuItems } from '@/services/mock/menu';
import type { MenuItem } from '@/types/menu';

interface QuickAction {
  id: string;
  title: string;
  subtitle: string;
  dotClassName: string;
}

// Блок «Быстрые действия» — три статичные строки, задача явно не просила
// под них отдельный тип/мок-файл (в отличие от сетки разделов), поэтому
// данные локальные, как CATEGORIES на экране «Главная».
const QUICK_ACTIONS: QuickAction[] = [
  {
    id: 'grant',
    title: 'Подать заявку на грант «Болашак»',
    subtitle: 'до 31 июля 2025',
    dotClassName: 'bg-primary',
  },
  {
    id: 'forum',
    title: 'Зарегистрироваться на форум',
    subtitle: '15 июня, Алматы',
    dotClassName: 'bg-blue',
  },
  {
    id: 'internship',
    title: 'Найти стажировку',
    subtitle: '6 актуальных позиций',
    dotClassName: 'bg-orangeText',
  },
];

const renderMenuCard: ListRenderItem<MenuItem> = ({ item }) => <MenuCard item={item} />;
const keyById = (item: { id: string }) => item.id;

function ListHeader() {
  return (
    <View className="mb-[6px]">
      <Text className="font-display text-[30px] tracking-[-0.02em] text-ink">Меню</Text>
      <Text className="mt-[2px] text-[14px] font-medium text-subtle">Все разделы приложения</Text>
    </View>
  );
}

function ListFooter() {
  return (
    <View className="mt-[14px]">
      <Text className="mb-3 text-[12px] font-bold uppercase tracking-[0.12em] text-subtle">
        Быстрые действия
      </Text>

      {/* Три статичных строки с разделителями — вложенный FlatList того же
          вертикального направления, что и внешний, создал бы предупреждение
          React Native о вложенных VirtualizedList. Список фиксированной
          длины (3), поэтому здесь оправданно обычным .map — как meta
          в FeedCard на экране «Главная». */}
      <View className="overflow-hidden rounded-[22px] border border-border bg-white">
        {QUICK_ACTIONS.map((action, index) => (
          <View key={action.id}>
            <View className="flex-row items-center gap-[14px] p-4">
              <View className={`h-[10px] w-[10px] rounded-full ${action.dotClassName}`} />
              <View className="flex-1">
                <Text className="text-[14px] font-bold text-ink">{action.title}</Text>
                <Text className="mt-[1px] text-[12px] font-medium text-subtle">
                  {action.subtitle}
                </Text>
              </View>
              <Feather name="chevron-right" size={16} color={ProjectColors.chevron} />
            </View>
            {index < QUICK_ACTIONS.length - 1 && <View className="ml-10 h-px bg-divider" />}
          </View>
        ))}
      </View>
    </View>
  );
}

export default function MenuScreen() {
  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-surface">
      <FlatList<MenuItem>
        data={menuItems}
        keyExtractor={keyById}
        renderItem={renderMenuCard}
        numColumns={2}
        columnWrapperClassName="gap-3"
        ListHeaderComponent={ListHeader}
        ListFooterComponent={ListFooter}
        showsVerticalScrollIndicator={false}
        contentContainerClassName="px-5 pb-[110px] pt-[14px]"
      />
    </SafeAreaView>
  );
}
