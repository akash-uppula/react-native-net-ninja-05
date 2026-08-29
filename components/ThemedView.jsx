import { View } from "react-native";
import { useColorScheme } from "react-native";

import Colors from "../constants/Colors";

const ThemedView = ({ style, children }) => {
  const colorScheme = useColorScheme();

  const colors = Colors[colorScheme ?? "light"];

  return (
    <View
      style={[
        {
          backgroundColor: colors.background,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default ThemedView;
