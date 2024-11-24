import { useEffect, useRef, useState } from 'react'
import './App.css'

//TODO most elegant useSocket hook later-on
function App() {
  const [socket, setSocket] = useState();
  const inputRef = useRef();

  function sendMessage() {
    if (!socket) {
      return;
    }
    const message = inputRef.current.value;
    console.log(message);
    //@ts-expect-error
    socket.send(message)
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws)

    ws.onmessage = (ev) => {
      alert(ev.data);
    }
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Message..."></input>
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App