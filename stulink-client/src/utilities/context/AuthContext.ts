import { createContext } from "react";
export interface AuthContextValues {
  isAuthenticated: boolean;
  setIsAuthenticated: any;
}
export const AuthContext = createContext<AuthContextValues | undefined>(undefined);
