import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "user-1" });
  const [sideBarOn, setSideBarOn] = useState(false);
  const [addProductBar, setAddProductBar] = useState(false);
  const info = {
    setSideBarOn,
    addProductBar,
    setAddProductBar,
    sideBarOn,
    user,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
