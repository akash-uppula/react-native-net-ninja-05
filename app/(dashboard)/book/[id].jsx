import { StyleSheet } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

import useBooks from "../../../hooks/useBooks";

import ThemedView from "../../../components/ThemedView";
import ThemedText from "../../../components/ThemedText";
import ThemedButton from "../../../components/ThemedButton";
import ThemedLoading from "../../../components/ThemedLoading";
import ThemedError from "../../../components/ThemedError";
import ThemedCard from "../../../components/ThemedCard";

const BookDetail = () => {
  const { id } = useLocalSearchParams();

  const { books, loading, error } = useBooks();

  const book = books.find((item) => item.$id === id);

  if (loading && !book) {
    return <ThemedLoading />;
  }

  if (error) {
    return (
      <ThemedView safeArea style={styles.container}>
        <ThemedError>{error}</ThemedError>
      </ThemedView>
    );
  }

  if (!book) {
    return (
      <ThemedView safeArea style={styles.container}>
        <ThemedView style={styles.notFoundContainer}>
          <ThemedText style={styles.notFoundTitle}>Book not found</ThemedText>

          <ThemedText style={styles.notFoundText}>
            This book could not be found.
          </ThemedText>

          <ThemedButton title="Go Back" onPress={() => router.back()} />
        </ThemedView>
      </ThemedView>
    );
  }

  return (
    <ThemedView safeArea style={styles.container}>
      <ThemedCard style={styles.card}>
        <ThemedText style={styles.title}>{book.title}</ThemedText>

        <ThemedText style={styles.author}>by {book.author}</ThemedText>

        <ThemedView style={styles.divider} />

        <ThemedText style={styles.rating}>⭐ {book.rating}/5</ThemedText>

        <ThemedText style={styles.descriptionTitle}>Description</ThemedText>

        <ThemedText style={styles.description}>{book.description}</ThemedText>
      </ThemedCard>

      <ThemedButton title="Go Back" onPress={() => router.back()} />
    </ThemedView>
  );
};

export default BookDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
  },

  card: {
    width: "80%",
    marginTop: 25,
    padding: 22,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    lineHeight: 36,
    marginBottom: 8,
  },

  author: {
    fontSize: 17,
    marginBottom: 20,
  },

  divider: {
    height: 1,
    width: "100%",
    marginBottom: 20,
  },

  rating: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 25,
  },

  descriptionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  description: {
    fontSize: 16,
    lineHeight: 25,
  },

  notFoundContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  notFoundTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  notFoundText: {
    fontSize: 16,
    marginBottom: 25,
  },
});
