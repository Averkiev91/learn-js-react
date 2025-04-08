import React, { useState, useCallback } from 'react';
import { UserContext } from './UserContext';
import { useGetUsersQuery } from '../redux/services/api';

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { data: users } = useGetUsersQuery();

  const login = useCallback(
    (name) => {
      if (users) {
        const foundUser = users.find((user) => user.name === name);
        if (foundUser) {
          setUser(foundUser);
          return true;
        }
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
