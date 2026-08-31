import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

import Colors from "../../constants/Colors";

const AppLayout = () => {
  const colorScheme = useColorScheme();

  const colors = Colors[colorScheme ?? "light"];

  return (
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
        name="test-appwrite"
        options={{
          title: "Test Appwrite",
        }}
      />
    </Stack>
  );
};

export default AppLayout;
