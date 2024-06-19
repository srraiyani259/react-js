
import React from 'react'
import { useReducer } from 'react';
import initialstate from './initialstate';
import reducer from './reducer';
import { increment, decrement } from './action';

function Example() {
    const [state, dispatch] = useReducer(reducer, initialstate);

    const handleincrement = (id) => {
      dispatch(increment(id));
    };
    
    const handledecrement = (id) => {
      dispatch(decrement(id));
    };
    
    const total = state.prices.reduce((sum, item) => sum + item.value, 0);
    
    return (
      <div className="container">
        {state.prices.map((item) => (
          <div className="item" key={item.id}>
            <h1>Price rs. {item.price}</h1>
            <h1>Amount : {item.value}</h1>
            <button onClick={() => handleincrement(item.id)}>INCREMENT</button>
            <button onClick={() => handledecrement(item.id)}>DECREMENT</button>
          </div>
        ))}
        <h1 className="total">Total : {total}</h1>
      </div>
    );
}

export default Example
