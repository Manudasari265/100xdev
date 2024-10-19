import { useEffect, useState } from "react"

export function ReturnFunc() {
    const [showTimer, setShowTimer] = useState(true);

    useEffect(() => {
        setInterval(() => {
            setShowTimer(currentValue => !currentValue);
        }, 5000);
    }, [])

    return <div>
        {showTimer && <Timer/>}
    </div>
}

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let clock = setInterval(() => {
            console.log("from clock")
            setSeconds(previousValue => previousValue + 1);
        }, 1000);
        //* cleanup function should be implemented
        return () => {
            clearInterval(clock);
        }
    }, [])

    return <div>
        {seconds} seconds elapsed
    </div>
}