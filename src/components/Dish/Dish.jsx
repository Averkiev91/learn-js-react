import React from 'react';
import { useSelector } from 'react-redux';
import { selectDishById } from '../../redux/entities/dishes/dishesSlice';

const Dish = ({ dishId }) => {
  const dish = useSelector((state) => selectDishById(state, dishId));

  if (!dish?.name) {
    return null;
  }

  return (
    <ul>
      <li>Name: {dish.name}</li>
      <li>Price: {dish.price}</li>
      <li>
        Ingredients:
        <ul>
          {dish.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default Dish;
