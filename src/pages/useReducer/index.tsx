import React, { useReducer } from "react";

interface IState {
    count: number;
}

const initialCount = { count: 0 };

// 初始化state，将useReducer的第二个参数 作为参数传入
const init = (initialState: IState) => {
    return { count: initialState.count + 100 };
}
// (state, action) => newState
// action 是 setState的 入参
const reducer = (state: IState, action: any) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return init(action.payload);
        default:
            throw new Error();
    }
}

const useReducerDemo = () => {
    const [state, dispatch] = useReducer(reducer, initialCount, init);
    // dispatch(action) <=> reducer(state, action)
    // 初始化state <=> init(initialCount)
    return (
        <div>
            <div>Count: {state.count}</div>
            <button onClick={() => dispatch({ type: 'reset', payload: initialCount })}>
                Reset
            </button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        </div>
    );
}


export default useReducerDemo;