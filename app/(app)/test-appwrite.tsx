import { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { account } from "../../lib/appwrite";

export default function TestAppwrite() {
  const [user, setUser] = useState<any>(null);
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    async function checkUser() {
      try {
        const currentUser = await account.get();

        setUser(currentUser);
        setMessage("");
      } catch (error) {
        setMessage("No user is currently logged in.");
      }
    }

    checkUser();
  }, []);

  return (
    <View style={{ marginLeft: 20, marginTop: 20 }}>
      <Text>Appwrite Connection Test</Text>

      {user ? (
        <View>
          <Text>User ID: {user.$id}</Text>
          <Text>Name: {user.name}</Text>
          <Text>Email: {user.email}</Text>
        </View>
      ) : (
        <Text>{message}</Text>
      )}
    </View>
  );
}
