import { StyleSheet } from "react-native";

import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedInput from "../../components/ThemedInput";
import ThemedButton from "../../components/ThemedButton";
import ThemedLink from "../../components/ThemedLink";

const Register = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Create Account</ThemedText>

      <ThemedInput placeholder="Name" autoCapitalize="words" />

      <ThemedInput
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <ThemedInput placeholder="Password" secureTextEntry />

      <ThemedButton
        title="Register"
        onPress={() => console.log("Register pressed")}
      />

      <ThemedLink href="/login" style={styles.link}>
        Already have an account? Login
      </ThemedLink>
    </ThemedView>
  );
};

export default Register;

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

  link: {
    marginTop: 15,
  },
});
