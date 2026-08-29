import { StyleSheet } from "react-native";

import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";

const Books = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>My Books</ThemedText>

      <ThemedText style={styles.text}>Your books will appear here.</ThemedText>
    </ThemedView>
  );
};

export default Books;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },

  text: {
    fontSize: 16,
  },
});
