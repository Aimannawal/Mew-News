import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black", // Warna teks tab aktif
        tabBarInactiveTintColor: "gray", // Warna teks tab non-aktif
        tabBarActiveBackgroundColor: "white", // Warna latar belakang tab aktif
        tabBarInactiveBackgroundColor: "white", // Warna latar belakang tab non-aktif
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={"#008DDA"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "search" : "search-outline"}
              color={"#008DDA"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
