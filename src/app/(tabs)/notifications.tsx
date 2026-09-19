import { StyleSheet, Text, View } from 'react-native';

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Хабарлама</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  label: { fontSize: 18, fontWeight: '600' },
});
