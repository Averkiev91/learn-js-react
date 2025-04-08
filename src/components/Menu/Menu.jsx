import React from 'react';
import NavigationTab from '../NavigationTab/NavigationTab';

const Menu = ({ menu }) => {
  return (
    <div>
      <h3>Меню</h3>
      <div style={{ display: 'flex', gap: '10px' }}>
        {menu.map(({ id, name }) => (
          <NavigationTab key={id} path={`/dish/${id}`} title={name} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
