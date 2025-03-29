import React from 'react';
import Counter from '../Counter/Counter';
import { useUser } from '../../hooks/useUser';
import { useCartItem } from '../../hooks/useCartItem';

const DishCounter = ({ dishId }) => {
  const { user } = useUser();
  const { amount, handleDishCountChange } = useCartItem(dishId);

  if (!user) {
    return <p>Не авторизован</p>;
  }

  return (
    <div>
      <Counter value={amount} onChange={handleDishCountChange} />
    </div>
  );
};

export default DishCounter;
