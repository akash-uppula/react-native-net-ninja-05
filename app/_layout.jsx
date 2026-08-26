import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
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
  );
};

export default Layout;
