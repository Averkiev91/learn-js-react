import React, { useState, useCallback } from 'react';
import Counter from '../Restaurant/Counter';
import { useUser } from '../../hooks/useUser';

const DishCounter = () => {
  const [dishCount, setDishCount] = useState(0);
  const { user } = useUser();

  const handleDishCountChange = useCallback((newCount) => {
    setDishCount(Number(newCount));
  }, []);

  if (!user) {
    return <p>Не авторизован</p>;
  }

  return (
    <div>
      <Counter value={dishCount} onChange={handleDishCountChange} />
    </div>
  );
};

export default DishCounter;
