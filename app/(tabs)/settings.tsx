import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ScreenWrapper from '@/components/ScreenWrapper';

export default function Settings() {
    return (
        <ScreenWrapper 
            title='Settings'
            scrollable
            contentContainerStyle={styles.content}
        >
            <StatusBar
                translucent
                backgroundColor="transparent"
                style="light"
            />
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
        // flex: 1,
        backgroundColor: '#121212', // was '#ebebeb'
        // paddingTop: 24,
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