import { StyleSheet, Text, View } from 'react-native';
import ScreenWrapper from '@/components/ScreenWrapper';

export default function HomeScreen() {
  return (
    <ScreenWrapper
      title="Home"
      // showBack
      screenBgColor="#0f172a"
      scrollable
      contentContainerStyle={styles.content}
    >
      {Array.from({ length: 30 }).map((_, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.title}>Item {index + 1}</Text>
        </View>
      ))}
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  statusBarBlur: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  },
  content: {
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 12,
    marginBottom: 12,
  },
  title: {
    color: '#fff',
    fontSize: 18,
  },
});