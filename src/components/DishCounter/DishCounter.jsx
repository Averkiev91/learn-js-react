import React, { useState } from 'react';
import Counter from '../Restaurant/Counter';

const DishCounter = () => {
  const [dishCount, setDishCount] = useState(0);

  const handleDishCountChange = (e) => {
    setDishCount(Number(e.target.value));
  };

  return (
    <div>
      <p>{`Количество блюд: ${dishCount}`}</p>
      <Counter count={dishCount} onChange={handleDishCountChange} />
    </div>
  );
};

export default DishCounter;
