import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";

const Layout = () => {
  const colorScheme = useColorScheme();

  const isDark = colorScheme === "dark";

  const colors = {
    background: isDark ? "#121212" : "#ffffff",
    text: isDark ? "#ffffff" : "#000000",
    header: isDark ? "#1e1e1e" : "#ffffff",
    border: isDark ? "#333333" : "#dddddd",
  };

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
