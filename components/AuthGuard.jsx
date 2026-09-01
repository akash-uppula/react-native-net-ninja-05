import { Redirect } from "expo-router";

import useAuth from "../hooks/useAuth";

import ThemedLoading from "./ThemedLoading";

const AuthGuard = ({ children }) => {
  const { user, authCheck } = useAuth();

  if (!authCheck) {
    return <ThemedLoading />;
  }

  if (user) {
    return <Redirect href="/profile" />;
  }

  return children;
};

export default AuthGuard;
