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
     <Name name1="manoj"/>
     <NameList/>
     <TodoApp/>
     <Form/>
     <ColorPicker/>
     <Counter2/>
     <TemperatureConverter/>
    </>
  )
}

//* Counter component
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

//* Greeting component
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

//* Name prop(easy)
function Name({name1}) {
  return (
    <h2>Hello, {name1}</h2>
  );
}

//* NameList component(medium)
function NameList() {
  const [names, setNames] = useState([]);
  const [newName, setNewName] = useState('')

  const addName = () => {
    if(newName.trim() !== '') {
      setNames([...names, newName]);
      setNewName('');
    }
  }

  const removeName = (index) => {
    setNames(names.filter((_, i) => i !== index));
  }

  return (
    <>
      <h2>Name List</h2>
      <input 
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={addName}>Add Name</button>
      <ul>
        {names.map((name, index) => {
          <li key={index}>
            {name}
            <button onClick={() => removeName(index)}>Remove Name</button>
          </li>
        })}
      </ul>
    </>
  )
}

//* Mini todoApp 
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

  const addtodos = () => {
    if(inputText.trim() !== '') {
      setTodos([
        ...todos,
        { text: inputText, description: inputText, completed: false }
      ]);
      setInputText('');
    }
  }

}


//* trim(), splice(), split()
function Form() {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    const trimmedInput = input.trim();
    const words = trimmedInput.split('');

    const updatedWords = [...words];
    updatedWords.splice(0, 1);

    console.log(`Original words: ${words}`);
    console.log(`After splice: ${updatedWords}`);
  }

  return (
    <div>
      <input 
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter some text"
      />  
      <button onClick={handleSubmit}>Submit</button> 
    </div>
  )
}
export default App




























































































