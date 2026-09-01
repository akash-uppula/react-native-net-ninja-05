import { ActivityIndicator, StyleSheet, useColorScheme } from "react-native";

import Colors from "../constants/Colors";
import ThemedView from "./ThemedView";

const ThemedLoading = () => {
  const colorScheme = useColorScheme();

  const colors = Colors[colorScheme ?? "light"];

  return (
    <ThemedView safeArea style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
    </ThemedView>
  );
};

export default ThemedLoading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
