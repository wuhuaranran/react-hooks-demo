import React, { useState } from "react";
import useSelfHooks from "./useSelfHooks";
import { useForceUpdate } from "../../utils/helper";

function SelfHooksDemo() {
    const [name, setName] = useState('名称')
    const [content, setContent] = useState('内容')

    // Hooks组件
    const selfHooks = useSelfHooks({ name, content });

    // 强制刷新Hooks
    const forceUpdate = useForceUpdate();

    return (
        <>
            <h3>自定义Hooks组件</h3>{selfHooks}
            <button onClick={() => setName(c => c + '-name-')}>change name</button>
            <button onClick={() => setContent(c => c + "-content-")}>change content</button>
            <hr />
            <h3>forceUpdate Hooks </h3>
            <button onClick={() => forceUpdate()}>force update</button>
        </>
    )
}

export default SelfHooksDemo;