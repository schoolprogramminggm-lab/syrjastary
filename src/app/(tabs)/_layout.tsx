import { Tabs } from 'expo-router';
import { CustomTabBar } from '@/components/navigation/CustomTabBar';

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="index" options={{ title: 'Басты бет' }} />
      <Tabs.Screen name="qr" options={{ title: 'QR' }} />
      <Tabs.Screen name="menu" options={{ title: 'Мәзір' }} />
      <Tabs.Screen name="notifications" options={{ title: 'Хабарлама' }} />
      <Tabs.Screen name="profile" options={{ title: 'Профиль' }} />
    </Tabs>
  );
}
