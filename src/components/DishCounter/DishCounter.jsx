import React, { useState, useCallback } from 'react';
import Counter from '../Restaurant/Counter';

const DishCounter = () => {
  const [dishCount, setDishCount] = useState(0);

  const handleDishCountChange = useCallback((newCount) => {
    console.log(newCount);
    setDishCount(Number(newCount));
  }, []);

  return (
    <div>
      <Counter value={dishCount} onChange={handleDishCountChange} />
    </div>
  );
};

export default DishCounter;
