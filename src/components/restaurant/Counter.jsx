import React, { useState } from 'react';
import { MIN_COUNT, MAX_COUNT } from '../../config/config.js';

const Counter = () => {
  const [count, setCount] = useState(MIN_COUNT);

  const increment = () => {
    setCount((prevCount) => (prevCount < MAX_COUNT ? prevCount + 1 : prevCount));
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > MIN_COUNT ? prevCount - 1 : prevCount));
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={decrement} disabled={count <= MIN_COUNT}>
        -
      </button>
      <button onClick={increment} disabled={count >= MAX_COUNT}>
        +
      </button>
    </div>
  );
};

export default Counter;
