import { useReducer, useRef, useEffect } from "react";

export const useForceUpdate = () => {
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    return () => forceUpdate();
}

export const usePrevious = (value: any) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}