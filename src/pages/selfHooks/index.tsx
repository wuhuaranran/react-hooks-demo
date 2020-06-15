import React, { useState } from "react";
import useSelfHooks from "./useSelfHooks";
import { useForceUpdate, usePrevious } from "../../utils/helper";

function SelfHooksDemo() {
    const [name, setName] = useState('名称')
    const [content, setContent] = useState('内容')

    // Hooks组件
    const selfHooks = useSelfHooks({ name, content });

    // 强制更新Hooks
    const forceUpdate = useForceUpdate();

    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count);
    return (
        <>
            <h3>自定义Hooks组件</h3>{selfHooks}
            <button onClick={() => setName(c => c + '-name-')}>change name</button>
            <button onClick={() => setContent(c => c + "-content-")}>change content</button>
            <hr />
            <h3>forceUpdate Hooks </h3>
            <button onClick={() => forceUpdate()}>force update</button>
            <hr />
            <h3>获取上次的state Hooks</h3>
            <p>Now: {count}, before: {prevCount}</p>
            <button onClick={() => setCount(c => c + 1)}> + 1 </button>
        </>
    )
}

export default SelfHooksDemo;