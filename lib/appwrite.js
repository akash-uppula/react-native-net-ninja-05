import "react-native-url-polyfill/auto";

import { Client, Account, Avatars, Databases, ID } from "react-native-appwrite";

export const client = new Client();

client
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("6a8ecc470002edba28f8")
  .setPlatform("dev.akashuppula.shelfie");

export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);

export { ID };
