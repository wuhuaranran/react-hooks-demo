import React, { useRef, useEffect, useState } from "react";

const useRefDemo = () => {
    // 保存元素
    const inputEl: any = useRef(null);
    const onButtonClick = () => {
        // `current` 指向已挂载到 DOM 上的文本输入元素
        inputEl.current.focus();
    };

    // 保存变量，区别页面是否第一次渲染
    const [time, setTime] = useState(0);
    let renderFirst = useRef(true);
    useEffect(() => {
        const id = setInterval(() => { setTime(c => c + 1) }, 1000);
        return () => clearInterval(id);
    }, [])
    useEffect(() => {
        console.log('time', time);
        renderFirst.current = false;
    }, [time])
    console.log(renderFirst);
    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}

export default useRefDemo;