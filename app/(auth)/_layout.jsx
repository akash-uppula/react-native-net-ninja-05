import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

import Colors from "../../constants/Colors";
import AuthGuard from "../../components/AuthGuard";

const AuthLayout = () => {
  const colorScheme = useColorScheme();

  const colors = Colors[colorScheme ?? "light"];

  return (
    <AuthGuard>
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
          name="login"
          options={{
            title: "Login",
          }}
        />

        <Stack.Screen
          name="register"
          options={{
            title: "Register",
          }}
        />
      </Stack>
    </AuthGuard>
  );
};

export default AuthLayout;
