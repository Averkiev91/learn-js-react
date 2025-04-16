'use client';

import DishCounter from '../../components/DishCounter/DishCounter';
import Dish from '../../components/Dish/Dish';

const DishLoader = ({ dish, dishId }) => {
  return (
    <div>
      <p>Количество блюд:</p>
      <Dish dish={dish} />
      <DishCounter dishId={dishId} />
    </div>
  );
};

export default DishLoader;
