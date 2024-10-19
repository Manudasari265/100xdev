import { useEffect } from "react";
import { useRef } from "react"

export const usePrev = (value) => {
    const ref = useRef();
    console.log("re-render happened with new value " + value);

    useEffect(() => {
    console.log("updated the ref to be " + value);
        ref.current = value;
    }, [value]);

    console.log("returned " + ref.current);
    return ref.current;
}

//& Note - It returns first, effect gets called later