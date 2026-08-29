import { StyleSheet } from "react-native";

import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedInput from "../../components/ThemedInput";
import ThemedButton from "../../components/ThemedButton";

const Login = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Welcome Back</ThemedText>

      <ThemedInput
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <ThemedInput placeholder="Password" secureTextEntry />

      <ThemedButton
        title="Login"
        onPress={() => console.log("Login pressed")}
      />
    </ThemedView>
  );
};

export default Login;

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
