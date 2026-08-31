import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";

import AuthProvider from "../context/AuthContext";

const Layout = () => {
  const colorScheme = useColorScheme();

  const isDark = colorScheme === "dark";

  return (
    <AuthProvider>
      <StatusBar style={isDark ? "light" : "dark"} />

      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </AuthProvider>
  );
};

export default Layout;
