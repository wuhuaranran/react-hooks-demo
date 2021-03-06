import React, { useState, useMemo } from "react";

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

    return (
        <>
            <button onClick={() => setName(c => c + '-name-')}>change name</button>
            <button onClick={() => setContent(c => c + "-content-")}>change content</button>
            <Child name={name} content={content}></Child>
        </>
    )
}

export default MemoDemo;