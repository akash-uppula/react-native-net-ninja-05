import { Redirect } from "expo-router";

import useAuth from "../hooks/useAuth";

import ThemedLoading from "./ThemedLoading";

const ProtectedRoute = ({ children }) => {
  const { user, authCheck } = useAuth();

  if (!authCheck) {
    return <ThemedLoading />;
  }

  if (!user) {
    return <Redirect href="/login" />;
  }

  return children;
};

export default ProtectedRoute;
