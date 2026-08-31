import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    console.log("Login Email:", email);
    console.log("Login Password:", password);

    const userData = {
      email,
    };

    setUser(userData);
  };

  const register = (name, email, password) => {
    console.log("Register Name:", name);
    console.log("Register Email:", email);
    console.log("Register Password:", password);

    const userData = {
      name,
      email,
    };

    setUser(userData);
  };

  const logout = () => {
    setUser(null);
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
