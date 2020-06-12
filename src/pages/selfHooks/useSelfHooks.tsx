import React, { useMemo } from "react";

const useSelfHooks = ({ name, content }: any) => {
    const changeName = (name: string) => {
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

export default useSelfHooks;