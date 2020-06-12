import React, { useState, useMemo } from "react";
import useSelfHooks from "./useSelfHooks";

const Child = ({ name, content }: any) => {
    function changeName(name: string) {
        console.log('changeName')
        return name + '名称结束'
    }

    // const otherName = changeName(name);
    // 当content改变时，name不变，所以不执行changeName
    const otherName = useMemo(() => changeName(name), [name])
    return (
        <>
            <div>名称：{otherName}</div>
            <div>内容：{content}</div>
        </>
    )
}

function MemoDemo() {
    const [name, setName] = useState('名称')
    const [content, setContent] = useState('内容')
    const selfHooks = useSelfHooks({ name, content });
    return (
        <>
            <button onClick={() => setName(c => c + ' -1 ')}>change name</button>
            <button onClick={() => setContent(c => c + " 内容 ")}>change content</button>
            <Child name={name} content={content}></Child>
            <hr />
            <div>以下是自定义Hooks组件{selfHooks}</div>
        </>
    )
}

export default MemoDemo;