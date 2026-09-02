import "react-native-url-polyfill/auto";

import {
  Client,
  Account,
  Avatars,
  TablesDB,
  ID,
  Query,
} from "react-native-appwrite";

export const client = new Client();

client
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("6a8ecc470002edba28f8")
  .setPlatform("dev.akashuppula.shelfie");

export const account = new Account(client);
export const avatars = new Avatars(client);
export const tablesDB = new TablesDB(client);

export { ID, Query };
