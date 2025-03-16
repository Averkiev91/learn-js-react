import React, { useState } from 'react';
import { MIN_COUNT, MAX_COUNT } from '../../config/config.js';

const Counter = ({ value, onChange }) => {
  const [count, setCount] = useState(value || MIN_COUNT);

  const increment = () => {
    const newCount = count < MAX_COUNT ? count + 1 : count;
    setCount(newCount);
    if (onChange) {
      onChange(newCount);
    }
  };

  const decrement = () => {
    const newCount = count > MIN_COUNT ? count - 1 : count;
    setCount(newCount);
    if (onChange) {
      onChange(newCount);
    }
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
