import { Text, View } from 'react-native';

// Временная проверка NativeWind: className + кастомный токен палитры
// (bg-primary) из tailwind.config.js. Полноценная вёрстка экрана — позже.
export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-primary">
      <Text className="text-lg font-semibold text-white">Басты бет</Text>
    </View>
  );
}
