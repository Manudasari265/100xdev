import { useState, createContext } from 'react'
import './App.css'

const bulbContext = createContext();

function App() {
  const [bulbOn, setBulbOn] = useState(true);

  return <div>
    <Light/>
  </div>
}

function Light() {
  return <div>
    <LightBulb bulbOn={bulbOn}/>
    <LightSwitch bulbOn={bulbOn} setBulbOn={setBulbOn}/>
  </div>
}

//* Light bulb children component from the left tree
function LightBulb({bulbOn}) {
  const bulbOn = getContext(bulbContext);

  return <div>
    {bulbOn ? "Bulb on" : "Bulb off"}
  </div>
}

//* Light switch children component from the right tree
function LightSwitch({bulbOn, setBulbOn}) {

  function toggle() {
    setBulbOn(!bulbOn);
  }
  return <div>
    <button onClick={toggle}>Toggle the bulb</button>
  </div>
}

export default App

