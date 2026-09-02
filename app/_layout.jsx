import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";

import AuthProvider from "../context/AuthContext";
import BookProvider from "../context/BookContext";

const Layout = () => {
  const colorScheme = useColorScheme();

  const isDark = colorScheme === "dark";

  return (
    <AuthProvider>
      <BookProvider>
        <StatusBar style={isDark ? "light" : "dark"} />

        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </BookProvider>
    </AuthProvider>
  );
};

export default Layout;
