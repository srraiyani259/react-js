import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const reset = () => ({ type: RESET });

const initialState = {
    count: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { count: state.count + 1 };
        case DECREMENT:
            return { count: state.count - 1 };
        case RESET:
            return { count: 0 };
        default:
            return state;
    }
};

export const store = createStore(reducer, applyMiddleware(thunk));
