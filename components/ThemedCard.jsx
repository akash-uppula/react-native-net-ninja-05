import { Pressable, useColorScheme } from "react-native";

import Colors from "../constants/Colors";
import ThemedView from "./ThemedView";

const ThemedCard = ({ children, style, ...props }) => {
  const colorScheme = useColorScheme();

  const colors = Colors[colorScheme ?? "light"];

  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        {
          width: "80%",
          alignSelf: "center",
          marginBottom: 15,
          borderWidth: 1,
          borderRadius: 12,
          borderColor: colors.border,
          opacity: pressed ? 0.7 : 1,
        },
        style,
      ]}
    >
      <ThemedView
        style={{
          padding: 18,
          borderRadius: 12,
          backgroundColor: colors.card,
        }}
      >
        {children}
      </ThemedView>
    </Pressable>
  );
};

export default ThemedCard;
