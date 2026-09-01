import { createContext, useEffect, useState } from "react";

import { account, ID } from "../lib/appwrite";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authCheck, setAuthCheck] = useState(false);
  const [loading, setLoading] = useState(false);

  const checkAuth = async () => {
    try {
      const userData = await account.get();

      setUser(userData);
    } catch (error) {
      setUser(null);
    } finally {
      setAuthCheck(true);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const login = async (email, password) => {
    try {
      setLoading(true);

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
    } finally {
      setLoading(false);
    }
  };

  const register = async (name, email, password) => {
    try {
      setLoading(true);

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
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);

      await account.deleteSession({
        sessionId: "current",
      });

      setUser(null);
    } catch (error) {
      console.log("Logout Error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    authCheck,
    loading,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
