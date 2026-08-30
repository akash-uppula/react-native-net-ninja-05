import { View, useColorScheme } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Colors from "../constants/Colors";

const ThemedView = ({ safeArea = false, ...props }) => {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  const colors = Colors[colorScheme ?? "light"];

  if (safeArea) {
    return (
      <View
        {...props}
        style={[
          {
            backgroundColor: colors.background,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
          props.style,
        ]}
      />
    );
  }

  return (
    <View
      {...props}
      style={[
        {
          backgroundColor: colors.background,
        },
        props.style,
      ]}
    />
  );
};

export default ThemedView;
