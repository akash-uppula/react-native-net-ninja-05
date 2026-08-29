import { StyleSheet } from "react-native";

import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedInput from "../../components/ThemedInput";
import ThemedButton from "../../components/ThemedButton";

const Create = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Add a Book</ThemedText>

      <ThemedInput placeholder="Book title" />

      <ThemedInput placeholder="Author" />

      <ThemedButton
        title="Add Book"
        onPress={() => console.log("Book added")}
      />
    </ThemedView>
  );
};

export default Create;

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
    marginBottom: 30,
  },
});
