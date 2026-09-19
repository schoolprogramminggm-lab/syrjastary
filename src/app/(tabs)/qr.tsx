import { StyleSheet, Text, View } from 'react-native';

export default function QrScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>QR</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  label: { fontSize: 18, fontWeight: '600' },
});
