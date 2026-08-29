import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";

import Colors from "../../constants/Colors";

const DashboardLayout = () => {
  const colorScheme = useColorScheme();

  const colors = Colors[colorScheme ?? "light"];

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.header,
        },

        headerTintColor: colors.text,

        headerTitleStyle: {
          color: colors.text,
        },

        headerShadowVisible: false,

        tabBarStyle: {
          backgroundColor: colors.tabBackground,
          borderTopColor: colors.tabBorder,
        },

        tabBarActiveTintColor: colors.tabActive,

        tabBarInactiveTintColor: colors.tabInactive,
      }}
    >
      <Tabs.Screen
        name="books"
        options={{
          title: "Books",
          tabBarLabel: "Books",
        }}
      />

      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarLabel: "Create",
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarLabel: "Profile",
        }}
      />
    </Tabs>
  );
};

export default DashboardLayout;
