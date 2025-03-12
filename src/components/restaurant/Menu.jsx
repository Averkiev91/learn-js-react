import React from 'react';
import Counter from './Counter';

const Menu = ({ menu }) => {
  return (
    <div>
      <ul>
        <li>{`Name: ${menu.name}`}</li>
        <li>{`Price: ${menu.price}`}</li>
        <li>{`Ingredients: ${menu.ingredients}`}</li>
      </ul>
      <Counter />
    </div>
  );
};

export default Menu;
