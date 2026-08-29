import { StyleSheet } from "react-native";

import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";

const Contact = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Contact</ThemedText>

      <ThemedText style={styles.text}>Email: myshelf@example.com</ThemedText>

      <ThemedText style={styles.text}>Phone: +91 98765 43210</ThemedText>
    </ThemedView>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  text: {
    fontSize: 16,
    marginVertical: 5,
  },
});
