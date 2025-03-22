import React, { useState, useCallback } from 'react';
import { UserContext } from './UserContext';
import { mockUsers } from '../../materials/mockUsers';

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = useCallback((name) => {
    const user = mockUsers.find((user) => user.name === name);
    if (user) {
      setUser(user);
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return <UserContext.Provider value={{ user, login, logout }}>{children}</UserContext.Provider>;
};
