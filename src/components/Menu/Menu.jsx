import React from 'react';
import { Link, useParams } from 'react-router';
import DishCounter from '../DishCounter/DishCounter';

const Menu = ({ menu, dishId }) => {
  const params = useParams();
  const isCurrentPage = params.dishId === dishId?.toString();

  return (
    <div>
      {isCurrentPage ? (
        <ul>
          <li>{`Name: ${menu.name}`}</li>
          <li>{`Price: ${menu.price}`}</li>
          <li>{`Ingredients: ${menu.ingredients}`}</li>
        </ul>
      ) : (
        <Link to={`/dish/${dishId}`}>
          <ul>
            <li>{`Name: ${menu.name}`}</li>
            <li>{`Price: ${menu.price}`}</li>
            <li>{`Ingredients: ${menu.ingredients}`}</li>
          </ul>
        </Link>
      )}
      <p>{`Количество блюд:`}</p>
      <DishCounter dishId={dishId} />
    </div>
  );
};

export default Menu;
