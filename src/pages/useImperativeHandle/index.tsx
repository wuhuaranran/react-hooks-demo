import React, { useImperativeHandle, useRef } from "react"

function ImperativeHandleDemo(props: any, ref: any) {
    const inputRef: any = useRef();
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        }
    }));
    return <input ref={inputRef} />;
}
// FancyInput = forwardRef(FancyInput);
export default ImperativeHandleDemo;