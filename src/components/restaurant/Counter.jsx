import React, { useState } from 'react';

const Counter = () => {
  const minCount = 0;
  const maxCount = 5;
  const [count, setCount] = useState(minCount);

  const increment = () => {
    setCount((prevCount) => (prevCount < maxCount ? prevCount + 1 : prevCount));
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > minCount ? prevCount - 1 : prevCount));
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={decrement} disabled={count <= minCount}>
        -
      </button>
      <button onClick={increment} disabled={count >= maxCount}>
        +
      </button>
    </div>
  );
};

export default Counter;
