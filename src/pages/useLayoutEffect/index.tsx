import React, { useState, useEffect, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';

function Com() {
    useEffect(() => {
        console.log('useEffect 执行...');
        return () => {
            console.log('useEffect 销毁...');
        }
    });

    useLayoutEffect(() => {
        console.log('useLayoutEffect 执行...');
        return () => {
            console.log('useLayoutEffect 销毁...');
        }
    });

    return (
        <div>
            {console.log('Com 渲染')}
            <h2>我是Com组件</h2>
        </div>
    )
}

const LayoutEffectDemo = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <Com />
            <p>count：{count}</p>
            <button onClick={() => setCount(count + 1)}>count + 1</button>
        </div>
    )
}

export default LayoutEffectDemo;