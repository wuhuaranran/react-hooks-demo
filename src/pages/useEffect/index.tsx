import React, { useState, useEffect } from "react";

const EffectDemo = () => {
    const [count, setCount] = useState(0);


    // 相当于 componentDidMount 和 componentDidUpdate
    // 使用 eslint-plugin-react-hooks  
    useEffect(() => {
        // 使用浏览器的 API 更新页面标题
        document.title = `You clicked ${count} times`;
    }, [count]);


    // 依赖列表中有函数
    // useEffect(() => {
    //     changeTitle();
    // })

    // const changeTitle = () => {
    //     document.title = `You clicked ${count} times`;
    // }

    // 清除副作用
    // const handleScroll = (e: any) => {
    //     console.log(e.srcElement.documentElement.scrollTop);
    // }
    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);
    //     return () => { window.removeEventListener("scroll", handleScroll) }
    // })

    // effect的依赖值频繁变化
    useEffect(() => {
        const id = setInterval(() => {
            setCount(c => c + 1); // 这个 effect 依赖于 `count` state
        }, 1000);
        return () => clearInterval(id);
    }, []);
    return (
        <div style={{ height: "110vh" }}>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export default EffectDemo;