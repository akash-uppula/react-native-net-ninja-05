import { Pressable, Text, useColorScheme } from "react-native";

import Colors from "../constants/Colors";

const ThemedButton = ({ title, ...props }) => {
  const colorScheme = useColorScheme();

  const colors = Colors[colorScheme ?? "light"];

  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        {
          width: 180,
          paddingVertical: 12,
          borderRadius: 8,
          backgroundColor: colors.primary,
          alignItems: "center",
          marginVertical: 6,
          transform: [{ scale: pressed ? 0.97 : 1 }],
        },
        props.style,
      ]}
    >
      <Text
        style={{
          color: colors.primaryText,
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default ThemedButton;
