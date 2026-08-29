import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";

import Colors from "../constants/Colors";

const Layout = () => {
  const colorScheme = useColorScheme();

  const isDark = colorScheme === "dark";

  const colors = Colors[colorScheme ?? "light"];

  return (
    <>
      <StatusBar style={isDark ? "light" : "dark"} />

      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.header,
          },

          headerTintColor: colors.text,

          headerTitleStyle: {
            color: colors.text,
          },

          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "My Shelf",
          }}
        />

        <Stack.Screen
          name="about"
          options={{
            title: "About",
          }}
        />

        <Stack.Screen
          name="contact"
          options={{
            title: "Contact",
          }}
        />
      </Stack>
    </>
  );
};

export default Layout;
