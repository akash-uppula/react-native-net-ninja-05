import { Link } from "expo-router";
import { useColorScheme } from "react-native";

import Colors from "../constants/Colors";

const ThemedLink = (props) => {
  const colorScheme = useColorScheme();

  const colors = Colors[colorScheme ?? "light"];

  return (
    <Link
      {...props}
      style={[
        {
          color: colors.primary,
          fontSize: 15,
          fontWeight: "600",
          textDecorationLine: "underline",
        },
        props.style,
      ]}
    />
  );
};

export default ThemedLink;
