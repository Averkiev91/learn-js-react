import React from 'react';
import { NavLink } from 'react-router';
import DishCounter from '../DishCounter/DishCounter';

const Menu = ({ menu, dishId }) => {
  return (
    <div>
      <NavLink to={`/dish/${dishId}`}>
        <ul>
          <li>{`Name: ${menu.name}`}</li>
          <li>{`Price: ${menu.price}`}</li>
          <li>{`Ingredients: ${menu.ingredients}`}</li>
        </ul>
      </NavLink>
      <p>{`Количество блюд:`}</p>
      <DishCounter dishId={dishId} />
    </div>
  );
};

export default Menu;
