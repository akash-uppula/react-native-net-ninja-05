import { Text, useColorScheme } from "react-native";

import Colors from "../constants/Colors";

const ThemedText = (props) => {
  const colorScheme = useColorScheme();

  const colors = Colors[colorScheme ?? "light"];

  return (
    <Text
      {...props}
      style={[
        {
          color: colors.text,
        },
        props.style,
      ]}
    />
  );
};

export default ThemedText;
