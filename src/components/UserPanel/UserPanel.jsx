"use client";

import React from 'react';
import { useUser } from '../../redux/hooks/useUser';

const UserPanel = () => {
  const { user, logout } = useUser();

  if (!user) {
    return null;
  }

  return (
    <div>
      <span>{`Привет, ${user.name}`}</span>
      <button onClick={logout}>Выйти</button>
    </div>
  );
};

export default UserPanel;
