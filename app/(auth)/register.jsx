import { StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

import useAuth from "../../hooks/useAuth";

import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedInput from "../../components/ThemedInput";
import ThemedButton from "../../components/ThemedButton";
import ThemedLink from "../../components/ThemedLink";
import ThemedError from "../../components/ThemedError";
import ThemedLoading from "../../components/ThemedLoading";

const Register = () => {
  const { register, loading } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      setError("");

      await register(name, email, password);

      router.replace("/books");
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <ThemedLoading />;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView safeArea style={styles.container}>
        <ThemedText style={styles.title}>Create Account</ThemedText>

        <ThemedInput
          placeholder="Name"
          autoCapitalize="words"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />

        <ThemedInput
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />

        <ThemedInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />

        {error && <ThemedError>{error}</ThemedError>}

        <ThemedButton title="Register" onPress={handleRegister} />

        <ThemedLink href="/login" style={styles.link}>
          Already have an account? Login
        </ThemedLink>
      </ThemedView>
    </TouchableWithoutFeedback>
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

  input: {
    width: "80%",
  },

  link: {
    marginTop: 15,
  },
});
