import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Platform,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

type Props = {
    title?: string;
    children: React.ReactNode;
    right?: React.ReactNode;
    showBack?: boolean;
    showHeader?: boolean;
};

export default function ScreenWrapper({
    title = "",
    children,
    right,
    showBack = false,
    showHeader = true,
}: Props) {
    const insets = useSafeAreaInsets();
    const router = useRouter();

    return (
        <View style={styles.container}>
            {showHeader && (
                <View
                    style={[
                        styles.header,
                        {
                            paddingTop: Platform.OS === "ios"
                                ? insets.top
                                : insets.top + 8,
                        },
                    ]}
                >
                    <View style={styles.side}>
                        {showBack && (
                            <Pressable onPress={() => router.back()} hitSlop={10}>
                                <Ionicons
                                    name="chevron-back"
                                    size={26}
                                    color="white"
                                />
                            </Pressable>
                        )}
                    </View>

                    <Text numberOfLines={1} style={styles.title}>
                        {title}
                    </Text>

                    <View style={[styles.side, styles.rightSide]}>
                        {right}
                    </View>
                </View>
            )}

            {/* <View style={[styles.content, { paddingBottom: insets.bottom + 56 }]}> */}
            <View style={styles.content}>
                {children}
            </View>
            <View style={styles.footer}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#121212",
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingBottom: 12,
        backgroundColor: "#121212",
        // backgroundColor: "#1a790dff",
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
        justifyContent: "center",
    },

    rightSide: {
        alignItems: "flex-end",
    },

    content: {
        flex: 1,
    },
    footer: {
        backgroundColor: "#161616ff",
        height: 50
    }
});