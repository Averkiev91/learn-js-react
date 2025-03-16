import React, { useState } from 'react';
import Counter from '../Restaurant/Counter';

const DishCounter = () => {
  const [dishCount, setDishCount] = useState(0);

  const handleDishCountChange = (newCount) => {
    setDishCount(Number(newCount));
  };

  return (
    <div>
      <Counter value={dishCount} onChange={handleDishCountChange} />
    </div>
  );
};

export default DishCounter;
