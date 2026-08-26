import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Link } from "expo-router";

import bookImage from "../assets/img/book.png";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Shelf</Text>

      <Image source={bookImage} style={styles.image} />

      <Text style={styles.bookName}>The Alchemist</Text>

      <Text style={styles.description}>A book I am currently reading.</Text>

      <View style={styles.linksContainer}>
        <Link href="/about" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>About</Text>
          </Pressable>
        </Link>

        <Link href="/contact" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Contact</Text>
          </Pressable>
        </Link>
      </View>
    </View>
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
    marginVertical: 20,
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

  linksContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 30,
  },

  button: {
    width: 180,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: "#333",
    alignItems: "center",
    marginVertical: 6,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
