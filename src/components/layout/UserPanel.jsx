import React from 'react';
import { useUser } from '../../hooks/useUser';

const UserPanel = () => {
  const { user, logout } = useUser();

  return (
    <div>
      <span>{`Привет, ${user.name}`}</span>
      <button onClick={logout}>Выйти</button>
    </div>
  );
};

export default UserPanel;
