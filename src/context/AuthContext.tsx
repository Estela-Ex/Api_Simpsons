import { useContext, useState, createContext, ReactNode } from "react";
import { UserAuth } from "../interface/UserAuth";
import { Value } from "../interface/Value";

const AuthContext = createContext<Value>({
  user: null,
  logout: () => { },
  setUser: () => { }
});


export default function AuthContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserAuth | null>(null);
 
  function logout() {
    setUser(null);

  }
  const value: Value = {
    user,
    logout,
    setUser
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export function useAuthContext() {
  return useContext(AuthContext);
}
