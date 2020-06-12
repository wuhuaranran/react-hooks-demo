import React, { useState, useEffect, useDebugValue } from "react";

const StateDemo = () => {
    const [count, setCount] = useState(2);
    // 相当于
    // const countState = useState(0);
    // const count = countState[0];
    // const setCount = countState[1];

    // 若initialState计算比较复杂
    // initialState只在初始渲染时起作用
    const [doubleCount, setDoubleCount] = useState(() => {
        console.log('initial state');
        return count * 2;
    });

    // state组织方式
    // const [top, setTop] = useState(0);
    // const [left, setLeft] = useState(0);
    // const [location, setSize] = useState({
    //     top: 0, left: 0
    // });

    useEffect(() => {
        console.log('doubleCount')
        setDoubleCount(count * 2);
    }, [count])

    const handleClick = () => {
        setCount(count + 1);
        // 回调写法
        // setCount((preState: any) => {
        //     return preState + 1;
        // })
    }
    console.log('render');
    // useDebugValue("my debug text");
    return (
        <div style={{ height: "110vh" }}>
            <p>You clicked {count} times</p>
            <p>double is {doubleCount} times</p>
            <button onClick={handleClick}>
                Click me
            </button>
        </div>
    );
}


export default StateDemo;