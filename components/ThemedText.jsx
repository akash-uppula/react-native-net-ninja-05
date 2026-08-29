import { Text } from "react-native";
import { useColorScheme } from "react-native";

import Colors from "../constants/Colors";

const ThemedText = ({ style, children }) => {
  const colorScheme = useColorScheme();

  const colors = Colors[colorScheme ?? "light"];

  return (
    <Text
      style={[
        {
          color: colors.text,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default ThemedText;
