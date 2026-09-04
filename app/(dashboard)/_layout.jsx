import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

import Colors from "../../constants/Colors";
import ProtectedRoute from "../../components/ProtectedRoute";

const DashboardLayout = () => {
  const colorScheme = useColorScheme();

  const colors = Colors[colorScheme ?? "light"];

  return (
    <ProtectedRoute>
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
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="book/[id]"
          options={{
            title: "Book Details",
          }}
        />
      </Stack>
    </ProtectedRoute>
  );
};

export default DashboardLayout;
