import { createContext } from "react";

export const AuthProvider = createContext({
  accessToken: "",
  refreshToken: "",
  role: "",
  id: "",
  username: "",
  email: "",
  isLoggedIn: "",
  handleLogin: () => {},
});
