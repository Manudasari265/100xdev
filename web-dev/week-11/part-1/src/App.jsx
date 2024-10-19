import './App.css'
import { usePostTitle } from './hooks/usePostTitle';
import useFetch from './hooks/useFetch';
import useCounter from './hooks/useCounter';

function App() {
  const [count, increaseCount] = useCounter();
  const postTitle = usePostTitle();
  const { finalData } = useFetch("url should be pasted here");
  
  // react swr, tanstack query libraries can be used instead of custom hooks
  return (
    <>
      <button onClick={increaseCount}>Increase {count}</button>
      {postTitle}
      {JSON.stringify(finalData)}
    </>
  )
}

export default App
