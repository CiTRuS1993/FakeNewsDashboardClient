import { useContext, createContext } from "react";

export const userContext = createContext(null);

export function useUserContext() {
  return useContext(userContext);
}
