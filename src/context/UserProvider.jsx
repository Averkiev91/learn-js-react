import React, { useState, useCallback } from 'react';
import { UserContext } from './UserContext';
import { useSelector } from 'react-redux';

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const users = useSelector((state) => state.users.entities);

  const login = useCallback(
    (name) => {
      const allUsers = Object.values(users);
      const foundUser = allUsers.find((user) => user.name === name);
      if (foundUser) {
        setUser(foundUser);
        return true;
      }
      return false;
    },
    [users]
  );

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return <UserContext.Provider value={{ user, login, logout }}>{children}</UserContext.Provider>;
};
