import React from 'react';
import Counter from '../Counter/Counter';
import { useUser } from '../../redux/hooks/useUser';
import { useCartItem } from '../../redux/hooks/useCartItem';

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
