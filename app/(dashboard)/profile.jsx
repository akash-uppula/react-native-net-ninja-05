import { StyleSheet } from "react-native";

import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";

const Profile = () => {
  return (
    <ThemedView safeArea style={styles.container}>
      <ThemedText style={styles.title}>Profile</ThemedText>

      <ThemedText style={styles.text}>Welcome to your profile.</ThemedText>

      <ThemedButton
        title="Logout"
        onPress={() => console.log("Logout pressed")}
      />
    </ThemedView>
  );
};

export default Profile;

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
    marginBottom: 20,
  },
});
