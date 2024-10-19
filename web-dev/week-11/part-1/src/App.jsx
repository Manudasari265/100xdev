import './App.css'
import { usePostTitle } from './hooks/usePostTitle';
import useFetch from './hooks/useFetch';
import useCounter from './hooks/useCounter';
import { useState } from 'react';
import { usePrev } from './hooks/usePrev';
import { useDebounce } from './hooks/useDebounce';

function App() {
  const [count, increaseCount] = useCounter();
  const postTitle = usePostTitle();
  const { finalData } = useFetch("url should be pasted here");
  const [state, setState] = useState(0);
  const prev = usePrev(state);
  
  const sendDataToBackend = () => {
    fetch("api.amazon.com/search/");
  }

  const debouncedFn = useDebounce(sendDataToBackend);
  
  // react swr, tanstack query libraries can be used instead of custom hooks
  return (
    <>
      <button onClick={increaseCount}>Increase {count}</button>
      {postTitle}
      {JSON.stringify(finalData)}
      <br />
      <p>{state}</p>
      <button 
        onClick={
          setState((curr) => curr + 1)
        }>
          Click me
      </button>
      <p>The previous state value was {prev}</p>
      <br />
      <input type="text" onChange={debouncedFn} />
    </>
  )
}

export default App
