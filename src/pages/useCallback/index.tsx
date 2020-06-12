import React, { useState, useCallback } from "react";

function CallbackDemo() {
    const [height, setHeight] = useState(0);

    const measuredRef = useCallback(node => {
        if (node !== null) {
            setHeight(node.getBoundingClientRect().height);
        }
    }, []);

    return (
        <>
            <h1 ref={measuredRef}>Hello, world</h1>
            <h2>The above header is {Math.round(height)}px tall</h2>
        </>
    );
}

export default CallbackDemo;