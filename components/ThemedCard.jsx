import { useColorScheme } from "react-native";

import Colors from "../constants/Colors";
import ThemedView from "./ThemedView";

const ThemedCard = ({ children, style, ...props }) => {
  const colorScheme = useColorScheme();

  const colors = Colors[colorScheme ?? "light"];

  return (
    <ThemedView
      {...props}
      style={[
        {
          width: "80%",
          alignSelf: "center",
          padding: 18,
          marginBottom: 15,
          borderWidth: 1,
          borderRadius: 12,
          backgroundColor: colors.card,
          borderColor: colors.border,
        },
        style,
      ]}
    >
      {children}
    </ThemedView>
  );
};

export default ThemedCard;
