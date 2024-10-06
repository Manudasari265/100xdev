import { useState, useEffect } from "react"

function App() {

  return (
    <>
      <Counter></Counter>
    </>
  )
}

function Counter() {
  const [count, setCount] = useState(0);

  //* hooking, re-rendering, unmounting
  console.log("counter");
  useEffect(() => {
    setInterval(() => {
      setCount(count => count + 1);
    }, 1000)
  }, []); // dependency array

  const increaseCount = () => {
    setCount(count + 1);
  }

  return <div>
    <h1>{count}</h1>
    <button onClick={increaseCount}>Increase count</button>
  </div>
}

export default App
