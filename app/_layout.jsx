import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";

const Layout = () => {
  const colorScheme = useColorScheme();

  const isDark = colorScheme === "dark";

  return (
    <>
      <StatusBar style={isDark ? "light" : "dark"} />

      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
};

export default Layout;
