import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Platform,
    ScrollView,
    StyleProp,
    ViewStyle,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useBottomTabPadding } from "@/hooks/use-bottom-tab-padding";

type Props = {
    title?: string;
    children: React.ReactNode;
    right?: React.ReactNode;
    showBack?: boolean;
    showHeader?: boolean;
    screenBgColor?: string;
    scrollable?: boolean;
    contentContainerStyle?: StyleProp<ViewStyle>;
};

export default function ScreenWrapper({
    title = "",
    children,
    right,
    showBack = false,
    showHeader = true,
    screenBgColor = "#121212",
    scrollable = false,
    contentContainerStyle,
}: Props) {
    const insets = useSafeAreaInsets();
    const router = useRouter();
    const bottomPadding = useBottomTabPadding();

    return (
        <View style={[styles.container, { backgroundColor: screenBgColor }]}>
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

            {scrollable ? (
                <ScrollView
                    style={styles.content}
                    contentContainerStyle={[contentContainerStyle, { paddingBottom: bottomPadding }]}
                    showsVerticalScrollIndicator={false}
                >
                    {children}
                </ScrollView>
            ) : (
                <View style={styles.content}>
                    {children}
                </View>
            )}
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
    }
});