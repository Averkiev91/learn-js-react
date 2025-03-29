import React from 'react';
import DishCounter from '../DishCounter/DishCounter';

const Menu = ({ menu }) => {
  return (
    <div>
      <ul>
        <li>{`Name: ${menu.name}`}</li>
        <li>{`Price: ${menu.price}`}</li>
        <li>{`Ingredients: ${menu.ingredients}`}</li>
      </ul>
      <p>{`Количество блюд:`}</p>
      <DishCounter dishId={menu.id} />
    </div>
  );
};

export default Menu;
