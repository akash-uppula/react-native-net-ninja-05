import { createContext, useState } from "react";

import { account, ID } from "../lib/appwrite";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      await account.createEmailPasswordSession({
        email,
        password,
      });

      const userData = await account.get();

      setUser(userData);

      return userData;
    } catch (error) {
      console.log("Login Error:", error);
      throw error;
    }
  };

  const register = async (name, email, password) => {
    try {
      await account.create({
        userId: ID.unique(),
        email,
        password,
        name,
      });

      const userData = await login(email, password);

      return userData;
    } catch (error) {
      console.log("Register Error:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await account.deleteSession({
        sessionId: "current",
      });

      setUser(null);
    } catch (error) {
      console.log("Logout Error:", error);
      throw error;
    }
  };

  const value = {
    user,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
