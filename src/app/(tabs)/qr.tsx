import { Pressable, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ProjectColors } from '@/constants/colors';

// Общий класс для всех четырёх угловых маркеров рамки: квадрат 32×32,
// цвет границы задаётся один раз, ширина/скругление — только по двум
// сторонам конкретного угла (задаются рядом при использовании).
const CORNER_BASE = 'absolute h-8 w-8 border-orange';

export default function QrScreen() {
  return (
    <SafeAreaView edges={['top']} className="flex-1 bg-darkScreenBg">
      <View className="flex-1 px-6 pb-[110px] pt-[14px]">
        {/* заголовок + подсказка */}
        <View className="mb-9 items-center">
          <Text className="font-display text-[26px] tracking-[-0.01em] text-white">
            QR-сканер
          </Text>
          <Text className="mt-[6px] text-center text-[14px] font-medium leading-[1.4] text-darkMuted">
            {'Наведите камеру на QR-код\nдля регистрации на мероприятие'}
          </Text>
        </View>

        {/* видоискатель */}
        <View className="mb-5 h-64 w-64 self-center overflow-hidden rounded-[32px] bg-ink">
          <View className="absolute inset-0 items-center justify-center opacity-[0.18]">
            <Feather name="maximize" size={100} color="white" />
          </View>

          <View
            className={`${CORNER_BASE} left-4 top-4 rounded-tl-lg border-l-[3px] border-t-[3px]`}
          />
          <View
            className={`${CORNER_BASE} right-4 top-4 rounded-tr-lg border-r-[3px] border-t-[3px]`}
          />
          <View
            className={`${CORNER_BASE} bottom-4 left-4 rounded-bl-lg border-b-[3px] border-l-[3px]`}
          />
          <View
            className={`${CORNER_BASE} bottom-4 right-4 rounded-br-lg border-b-[3px] border-r-[3px]`}
          />

          {/* линия сканирования — статичная, без анимации (не требовалась) */}
          <View className="absolute left-7 right-7 top-1/2 h-[2px] overflow-hidden">
            <LinearGradient
              colors={['transparent', ProjectColors.orange, 'transparent']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ flex: 1 }}
            />
          </View>
        </View>

        <Text className="mb-auto text-center text-[13px] font-medium text-muted">
          Поиск QR-кода…
        </Text>

        {/* кнопки управления */}
        <View className="mt-7 flex-row gap-3">
          <Pressable className="flex-1 items-center gap-2 rounded-[20px] border border-white/10 bg-white/5 p-4">
            <Feather name="zap" size={24} color={ProjectColors.orange} />
            <Text className="text-[12px] font-bold text-chevron">Фонарик</Text>
          </Pressable>
          <Pressable className="flex-1 items-center gap-2 rounded-[20px] border border-white/10 bg-white/5 p-4">
            <Feather name="image" size={24} color="white" />
            <Text className="text-[12px] font-bold text-chevron">Из галереи</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
