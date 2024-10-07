/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
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
     <Greeting firstName="John" age={25}/>
     <NameList/>
     <TodoApp/>
     <ColorPicker/>
     <Counter2/>
     <TemperatureConverter/>
    </>
  )
}

function Counter() {
  const [count, setCount] = useState(0);

  //^ hooking, re-rendering, unmounting
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

  return (
    <div>
      <h1>Count is: {count}</h1>
      <button onClick={increaseCount}>Increase count</button>
    </div>
  );
}

function Greeting({ firstName, age }) {
  const [name, setName] = useState(firstName);

  return (
    <div>
      <h2>Hello {name}! you are {age}</h2>
      <input 
        type="text"
        value="{name}"
        onClick={(e) => setName(e.target.value)} />
    </div>
  )
}

export default App




























































































