import React, { useState, useEffect } from 'react';
import './App.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };
  
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="phone-container">
      <div className="phone-screen">
        <h2 className="phone-heading">Impressive Counter</h2>
        <div className="counter">
          <button className="counter-button" onClick={decrement}>-</button>
          <span className="count">{count}</span>
          <button className="counter-button" onClick={increment}>+</button>
        </div>
        <div className="counter-controls">
          <button className="control-button" onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
