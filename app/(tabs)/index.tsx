import { StatusBar } from 'expo-status-bar';
import { BlurView } from 'expo-blur';
import { ScrollView, StyleSheet, Text, View, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ScreenWrapper from '@/components/ScreenWrapper';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const bottomPadding = Platform.OS === 'ios'
    ? insets.bottom + 49 + 16
    : (Platform.OS === 'android' ? insets.bottom + 60 + 16 : 40);

  return (
    <ScreenWrapper
      title="Home"
      showBack
      screenBgColor="#0f172a"
    >
      <View style={styles.container} >
        <ScrollView
          contentContainerStyle={[styles.content, { paddingBottom: bottomPadding }]}
          showsVerticalScrollIndicator={false}
        >
          {Array.from({ length: 30 }).map((_, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.title}>Item {index + 1}</Text>
            </View>
          ))}
        </ScrollView>
      </View >
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