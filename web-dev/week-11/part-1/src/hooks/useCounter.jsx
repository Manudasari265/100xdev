import { useState } from "react";

// custom hook - useCounter : which can be re-used in various components
export default function useCounter() {
    const [count, setCount] = useState(0);
  
    function increaseCount() {
      setCount(cnt => cnt + 1);
    }
  
    return {
      count: count,
      increaseCount: increaseCount
    }
  }