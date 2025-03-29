import React from 'react';
import { MIN_COUNT, MAX_COUNT } from '../../config/config.js';

const Counter = ({ value, onChange }) => {
  const increment = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const newCount = value < MAX_COUNT ? value + 1 : value;
    if (onChange) {
      onChange(newCount);
    }
  };

  const decrement = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const newCount = value > MIN_COUNT ? value - 1 : value;
    if (onChange) {
      onChange(newCount);
    }
  };

  return (
    <div>
      <p>{value}</p>
      <button type='button' onClick={decrement} disabled={value <= MIN_COUNT}>
        -
      </button>
      <button type='button' onClick={increment} disabled={value >= MAX_COUNT}>
        +
      </button>
    </div>
  );
};

export default Counter;
