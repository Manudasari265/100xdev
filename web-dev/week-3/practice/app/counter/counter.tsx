'use client';

import { useState } from "react"

export const Counter = () => {
    const [count, setCount] = useState(0);

    return <div>
        <p>Count :{count}</p>
        <button onClick={() => setCount(count + 2)}>Increment</button>
    </div>
}