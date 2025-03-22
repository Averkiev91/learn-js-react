import React from 'react';

const UserPanel = ({ user, onLogout }) => {
  return (
    <div>
      <span>Привет, {user.name}</span>
      <button onClick={onLogout}>Выйти</button>
    </div>
  );
};

export default React.memo(UserPanel);
