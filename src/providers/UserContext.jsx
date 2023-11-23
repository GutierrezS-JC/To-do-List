import { createContext, useState, useEffect } from "react";
export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  })

  const loginUser = (newUser) => {
    setUser(newUser);
  };

  const logoutUser = () => {
    setUser(null)
  }

  // Local Storage Update
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);


  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  )
};

