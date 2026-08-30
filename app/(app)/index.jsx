import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";

import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";
import ThemedImage from "../../components/ThemedImage";

const Home = () => {
  return (
    <ThemedView safeArea style={styles.container}>
      <ThemedText style={styles.title}>My Shelf</ThemedText>

      <ThemedImage style={styles.image} />

      <ThemedText style={styles.bookName}>The Alchemist</ThemedText>

      <ThemedText style={styles.description}>
        A book I am currently reading.
      </ThemedText>

      <View style={styles.buttons}>
        <Link href="/login" asChild>
          <ThemedButton title="Login" />
        </Link>

        <Link href="/register" asChild>
          <ThemedButton title="Register" />
        </Link>

        <Link href="/test-appwrite" asChild>
          <ThemedButton title="Test Appwrite" />
        </Link>
      </View>
    </ThemedView>
  );
};

export default Home;

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

  image: {
    width: 150,
    height: 200,
  },

  bookName: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },

  description: {
    fontSize: 16,
    marginTop: 5,
  },

  buttons: {
    marginTop: 30,
    alignItems: "center",
  },
});
