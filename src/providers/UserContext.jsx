import { createContext, useContext, useState } from "react";
export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const loginUser = (newUser) => {
    setUser(newUser);
  };

  const isLoggedIn = () => {
    return user ? true : false
  }

  const logoutUser = () => {
    setUser(null)
  }

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  )
};

