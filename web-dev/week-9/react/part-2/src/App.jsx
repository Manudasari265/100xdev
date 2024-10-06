import { useState, useEffect } from "react"

function App() {
  let [counterVisible, setCounterVisible] = useState(true);
  
  useEffect(() => {
    setInterval(() => {
      setCounterVisible(count => !count)
    }, 5000);
  }, [])
  return (
    <>
     {counterVisible ? <Counter></Counter> : null }
    </>
  )
}

function Counter() {
  const [count, setCount] = useState(0);

  //* hooking, re-rendering, unmounting
  console.log("counter");
  useEffect(() => {
    let clock = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);
    return () => {
      clearInterval(clock);
    }
  }, []); // dependency array, clean-up, fetch inside useEffect

  const increaseCount = () => {
    setCount(count + 1);
  }

  return <div>
    <h1>{count}</h1>
    <button onClick={increaseCount}>Increase count</button>
  </div>
}

export default App




























































































