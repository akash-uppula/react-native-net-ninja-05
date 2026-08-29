import { View, useColorScheme } from "react-native";

import Colors from "../constants/Colors";

const ThemedView = (props) => {
  const colorScheme = useColorScheme();

  const colors = Colors[colorScheme ?? "light"];

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
