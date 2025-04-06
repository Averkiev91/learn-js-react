import React from 'react';

const Dish = ({ dish }) => {
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
