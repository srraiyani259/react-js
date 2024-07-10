import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./Store";

function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count);

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    );
}

export default Counter;
