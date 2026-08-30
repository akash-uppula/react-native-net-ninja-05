import { useEffect } from "react";
import { Text, View } from "react-native";

import { account } from "../../lib/appwrite";

export default function TestAppwrite() {
  useEffect(() => {
    async function checkUser() {
      try {
        const user = await account.get();

        console.log("Logged in user:", user);
      } catch (error) {
        console.log("No logged in user");
      }
    }

    checkUser();
  }, []);

  return (
    <View>
      <Text>Appwrite Connected</Text>
    </View>
  );
}
