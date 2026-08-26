import { StyleSheet, Text, View } from "react-native";

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About My Shelf</Text>

      <Text style={styles.description}>
        My Shelf is a simple app where I can keep track of the books I am
        reading.
      </Text>
    </View>
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
