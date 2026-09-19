import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import type { ListRenderItem } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Chip } from '@/components/ui/Chip';
import { FeedCard } from '@/components/ui/FeedCard';
import { ProjectColors } from '@/constants/colors';
import { feedItems } from '@/services/mock/feed';
import type { FeedItem } from '@/types/feed';

// Порядок совпадает с макетом: первый фильтр («Все») активен.
const CATEGORIES = ['Все', 'Мероприятия', 'Вакансии', 'Гранты'];

const renderCategoryChip: ListRenderItem<string> = ({ item, index }) => (
  <Chip label={item} active={index === 0} />
);

const renderFeedCard: ListRenderItem<FeedItem> = ({ item }) => <FeedCard item={item} />;

const keyByLabel = (label: string) => label;
const keyById = (item: FeedItem) => item.id;

function ListHeader() {
  return (
    <View>
      {/* 1. Шапка: аватар, приветствие, иконки */}
      <View className="mb-[22px] flex-row items-center gap-3">
        <View className="h-[46px] w-[46px] items-center justify-center rounded-2xl bg-primary">
          <Text className="font-display text-xl text-white">А</Text>
        </View>
        <View className="flex-1">
          <Text className="font-medium text-[13px] text-subtle">Сәлем, Аян</Text>
          <Text className="font-display text-[19px] tracking-[-0.01em] text-ink">
            Что нового?
          </Text>
        </View>
        <View className="relative h-[46px] w-[46px] items-center justify-center rounded-2xl border border-border bg-white">
          <Feather name="bell" size={21} color={ProjectColors.ink} />
          <View className="absolute right-3 top-[11px] h-[9px] w-[9px] rounded-full border-2 border-white bg-danger" />
        </View>
      </View>

      {/* 2. Строка поиска */}
      <View className="mb-5 flex-row items-center gap-[10px] rounded-2xl border border-border bg-white px-4 py-[14px]">
        <Feather name="search" size={19} color={ProjectColors.subtle} />
        <Text className="font-medium text-[14.5px] text-subtle">
          Поиск мероприятий, грантов…
        </Text>
      </View>

      {/* 3. Hero-карточка */}
      <View className="relative mb-[22px] overflow-hidden rounded-[26px]">
        {/* expo-linear-gradient не поддерживает className (не патчится
            NativeWind-интеропом) — единственное оправданное исключение
            из «только className» на весь экран: заливка через style,
            весь контент и отступы поверх неё — обычными View/Text
            с className, как везде. */}
        <LinearGradient
          colors={[ProjectColors.primary, ProjectColors.primaryDark]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={StyleSheet.absoluteFill}
        />
        <View className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
        <View className="absolute -bottom-[50px] right-[30px] h-[110px] w-[110px] rounded-full bg-orange/10" />

        <View className="p-[22px]">
          <View className="mb-[14px] flex-row items-center gap-[6px] self-start rounded-full bg-white/20 px-3 py-[6px]">
            <View className="h-[6px] w-[6px] rounded-full bg-orange" />
            <Text className="font-bold text-[11px] tracking-[0.04em] text-white">
              15 ИЮНЯ · АЛМАТЫ
            </Text>
          </View>

          <Text className="mb-[14px] font-display text-[23px] leading-[1.12] tracking-[-0.01em] text-white">
            Форум молодых предпринимателей
          </Text>

          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="h-[30px] w-[30px] rounded-full border-2 border-primary bg-orange" />
              <View className="-ml-[10px] h-[30px] w-[30px] rounded-full border-2 border-primary bg-white" />
              <View className="-ml-[10px] h-[30px] w-[30px] items-center justify-center rounded-full border-2 border-primary bg-white/30">
                <Text className="font-bold text-[11px] text-white">+47</Text>
              </View>
            </View>
            <Pressable className="rounded-[13px] bg-white px-[18px] py-[10px]">
              <Text className="font-bold text-[13px] text-primaryDark">Участвовать</Text>
            </Pressable>
          </View>
        </View>
      </View>

      {/* 4. Чипы-фильтры, горизонтальный скролл */}
      <FlatList
        horizontal
        data={CATEGORIES}
        keyExtractor={keyByLabel}
        renderItem={renderCategoryChip}
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="mb-[22px] gap-2"
      />

      {/* 5. Заголовок ленты */}
      <View className="mb-[14px] flex-row items-baseline justify-between">
        <Text className="font-display text-lg text-ink">Лента</Text>
        <Text className="font-medium text-[13px] text-primary">Все →</Text>
      </View>
    </View>
  );
}

export default function HomeScreen() {
  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-surface">
      <FlatList
        data={feedItems}
        keyExtractor={keyById}
        renderItem={renderFeedCard}
        ListHeaderComponent={ListHeader}
        showsVerticalScrollIndicator={false}
        // Нижний отступ — под плавающий таб-бар (см. README дизайн-хендоффа:
        // 110px на iOS уже включает запас под home indicator).
        contentContainerClassName="px-5 pb-[110px] pt-[14px]"
      />
    </SafeAreaView>
  );
}
