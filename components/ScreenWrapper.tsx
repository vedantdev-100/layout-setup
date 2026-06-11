import React from "react";
import { View, Text, StyleSheet, Pressable, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

type Props = {
    title: string;
    children: React.ReactNode;
    right?: React.ReactNode;
    showBack?: boolean;
};

export default function ScreenWrapper({
    title,
    children,
    right,
    showBack = false,
}: Props) {
    const insets = useSafeAreaInsets();
    const router = useRouter();

    return (
        <View style={styles.container}>
            {/* Header */}
            <View
                style={[
                    styles.header,
                    {
                        paddingTop: Platform.OS === "ios" ? insets.top : insets.top + 8,
                    },
                ]}
            >
                {/* Left */}
                <View style={styles.side}>
                    {showBack ? (
                        <Pressable onPress={() => router.back()} hitSlop={10}>
                            <Ionicons name="chevron-back" size={26} color="white" />
                        </Pressable>
                    ) : null}
                </View>

                {/* Title */}
                <Text numberOfLines={1} style={styles.title}>
                    {title}
                </Text>

                {/* Right */}
                <View style={styles.side}>{right}</View>
            </View>

            {/* Content */}
            <View style={styles.content}>{children}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingBottom: 12,
    },

    title: {
        flex: 1,
        textAlign: "center",
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
    },

    side: {
        width: 60,
        alignItems: "flex-start",
        justifyContent: "center",
    },

    content: {
        flex: 1,
    },
});