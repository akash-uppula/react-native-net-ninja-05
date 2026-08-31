import { StyleSheet, useColorScheme } from "react-native";

import Colors from "../constants/Colors";
import ThemedText from "./ThemedText";

const ThemedError = ({ children, ...props }) => {
  const colorScheme = useColorScheme();

  const colors = Colors[colorScheme ?? "light"];

  return (
    <ThemedText
      {...props}
      style={[
        styles.error,
        {
          color: colors.error,
        },
        props.style,
      ]}
    >
      {children}
    </ThemedText>
  );
};

export default ThemedError;

const styles = StyleSheet.create({
  error: {
    fontSize: 14,
    marginTop: 8,
    textAlign: "center",
  },
});
