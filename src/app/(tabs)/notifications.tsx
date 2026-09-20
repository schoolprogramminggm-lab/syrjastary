import { useMemo, useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import type { ListRenderItem } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import { NotificationCard } from '@/components/ui/NotificationCard';
import { ProjectColors } from '@/constants/colors';
import { notifications } from '@/services/mock/notifications';
import type { Notification } from '@/types/notification';

type NotificationFilter = 'all' | 'unread';

// Строка списка: либо заголовок секции («Сегодня»/«Ранее»), либо карточка
// уведомления. Смешаны в одном массиве — чтобы вести список одним FlatList,
// а не отдельным SectionList или двумя списками.
type NotificationRow =
  | { kind: 'section'; id: string; label: string }
  | { kind: 'item'; id: string; notification: Notification };

const SECTION_LABELS: Record<Notification['period'], string> = {
  today: 'Сегодня',
  earlier: 'Ранее',
};

function buildRows(items: Notification[]): NotificationRow[] {
  const rows: NotificationRow[] = [];
  (['today', 'earlier'] as const).forEach((period) => {
    const group = items.filter((item) => item.period === period);
    if (group.length === 0) return;
    rows.push({ kind: 'section', id: `section-${period}`, label: SECTION_LABELS[period] });
    group.forEach((item) => rows.push({ kind: 'item', id: item.id, notification: item }));
  });
  return rows;
}

const renderRow: ListRenderItem<NotificationRow> = ({ item }) => {
  if (item.kind === 'section') {
    return (
      <Text className="mb-3 text-[12px] font-bold uppercase tracking-[0.12em] text-subtle">
        {item.label}
      </Text>
    );
  }
  return <NotificationCard notification={item.notification} />;
};

const keyByRowId = (row: NotificationRow) => row.id;

interface ListHeaderProps {
  unreadCount: number;
  filter: NotificationFilter;
  onFilterChange: (filter: NotificationFilter) => void;
}

function ListHeader({ unreadCount, filter, onFilterChange }: ListHeaderProps) {
  return (
    <View>
      <View className="mb-[18px] flex-row items-center gap-[10px]">
        <Text className="font-display text-[30px] tracking-[-0.02em] text-ink">Уведомления</Text>
        {unreadCount > 0 && (
          <View className="h-[22px] min-w-[22px] items-center justify-center rounded-full bg-danger px-[6px]">
            <Text className="text-[12px] font-bold text-white">{unreadCount}</Text>
          </View>
        )}
      </View>

      <View className="mb-6 flex-row gap-[6px] rounded-2xl border border-border bg-white p-1">
        <Pressable
          onPress={() => onFilterChange('all')}
          className={
            filter === 'all'
              ? 'flex-1 items-center rounded-xl bg-orange py-[9px]'
              : 'flex-1 items-center py-[9px]'
          }
        >
          <Text
            className={
              filter === 'all'
                ? 'text-[13px] font-bold text-white'
                : 'text-[13px] font-medium text-muted'
            }
          >
            Все
          </Text>
        </Pressable>
        <Pressable
          onPress={() => onFilterChange('unread')}
          className={
            filter === 'unread'
              ? 'flex-1 items-center rounded-xl bg-orange py-[9px]'
              : 'flex-1 items-center py-[9px]'
          }
        >
          <Text
            className={
              filter === 'unread'
                ? 'text-[13px] font-bold text-white'
                : 'text-[13px] font-medium text-muted'
            }
          >
            Непрочитанные
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

function EmptyState() {
  return (
    <View className="items-center rounded-[20px] border border-border bg-white px-6 py-10">
      <Feather name="bell-off" size={28} color={ProjectColors.subtle} />
      <Text className="mt-3 text-center text-[14px] font-bold text-ink">Нет уведомлений</Text>
      <Text className="mt-1 text-center font-sans text-[13px] text-muted">
        Здесь появятся новые уведомления, когда что-то произойдёт
      </Text>
    </View>
  );
}

export default function NotificationsScreen() {
  const [filter, setFilter] = useState<NotificationFilter>('all');

  const unreadCount = useMemo(() => notifications.filter((item) => !item.read).length, []);

  const visibleNotifications = useMemo(
    () => (filter === 'all' ? notifications : notifications.filter((item) => !item.read)),
    [filter],
  );

  const rows = useMemo(() => buildRows(visibleNotifications), [visibleNotifications]);

  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-surface">
      <FlatList<NotificationRow>
        data={rows}
        keyExtractor={keyByRowId}
        renderItem={renderRow}
        ListHeaderComponent={
          <ListHeader unreadCount={unreadCount} filter={filter} onFilterChange={setFilter} />
        }
        ListEmptyComponent={EmptyState}
        showsVerticalScrollIndicator={false}
        contentContainerClassName="px-5 pb-[110px] pt-[14px]"
      />
    </SafeAreaView>
  );
}
