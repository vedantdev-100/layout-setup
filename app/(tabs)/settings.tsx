import { StatusBar } from 'expo-status-bar';
import { BlurView } from 'expo-blur';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function Settings() {
    const insets = useSafeAreaInsets();

    return (
        <View style={styles.container} >
            <StatusBar
                translucent
                backgroundColor="transparent"
                style="light"
            />

            {/* Only blur the status bar area */}
            {/* <BlurView
                intensity={80}
                tint="dark"
                style={[
                    styles.statusBarBlur,
                    {
                        height: insets.top,
                    },
                ]}
            /> */}

            <ScrollView
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                {Array.from({ length: 30 }).map((_, index) => (
                    <View key={index} style={styles.card}>
                        <Text style={styles.title}>Item {index + 1}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212', // was '#ebebeb'
        paddingTop: 24,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingBottom: 12,
        backgroundColor: "#121212", // ← only here
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