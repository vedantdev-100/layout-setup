import React, { useEffect } from "react";
import { NativeTabs, Icon, Label } from "expo-router/unstable-native-tabs";
import * as NavigationBar from "expo-navigation-bar";

import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
    const colorScheme = useColorScheme();
    const colors = Colors[colorScheme ?? "light"];
    const tabBarColor = "#161616";

    useEffect(() => {
        NavigationBar.setButtonStyleAsync("light");
    }, []);

    return (
        <NativeTabs
            tintColor={colors.tint}
            disableTransparentOnScrollEdge
            backgroundColor={tabBarColor}
        >
            <NativeTabs.Trigger name="index">
                <Label>Home</Label>
                <Icon sf="house.fill" drawable="ic_menu_view" />
            </NativeTabs.Trigger>

            <NativeTabs.Trigger name="explore">
                <Label>Explore</Label>
                <Icon sf="paperplane.fill" drawable="ic_menu_compass" />
            </NativeTabs.Trigger>

            <NativeTabs.Trigger name="settings">
                <Label>Settings</Label>
                <Icon sf="gearshape.fill" drawable="ic_menu_manage" />
            </NativeTabs.Trigger>
        </NativeTabs>
    );
}