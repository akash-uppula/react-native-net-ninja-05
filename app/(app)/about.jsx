import { StyleSheet } from "react-native";

import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";

const About = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>About My Shelf</ThemedText>

      <ThemedText style={styles.description}>
        My Shelf is a simple app where I can keep track of the books I am
        reading.
      </ThemedText>
    </ThemedView>
  );
};

export default About;

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
    marginBottom: 20,
  },

  description: {
    fontSize: 16,
    textAlign: "center",
  },
});
