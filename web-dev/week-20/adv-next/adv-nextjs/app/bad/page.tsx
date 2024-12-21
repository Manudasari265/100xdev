"use client";

import { useState } from "react"

export default function Bad() {
    const [count, setCount] = useState(0)

    return <div>
        Bad page - 
        <button onClick={() => {
            setCount(count + 1)
        }}>Click me ({count})</button>
    </div>
}