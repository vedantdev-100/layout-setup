import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { BlurView } from 'expo-blur';
import { View, StyleSheet, Platform } from 'react-native';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

function StatusOverlays() {
  const insets = useSafeAreaInsets();
  if (Platform.OS === 'ios') {
    return null;
  }
  return (
    <>
      {/* Top Blur only */}
      <BlurView
        intensity={85}
        tint="dark"
        style={[
          styles.blur,
          { height: insets.top }, 
        ]}
      />
    </>
  );
}


const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: "#121212",
  },
};

const CustomLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#121212",
  },
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <ThemeProvider value={colorScheme === 'dark' ? CustomDarkTheme : CustomLightTheme}>

        <StatusBar
          style="light"
          translucent
          backgroundColor="transparent"
        />

        <View style={{ flex: 1, backgroundColor: "#121212" }}>

          <Stack
            screenOptions={{
              contentStyle: {
                backgroundColor: "#121212",
              },
            }}
          >
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
          </Stack>

          <StatusOverlays />

        </View>

      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  blur: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    overflow: 'hidden',
  },
});