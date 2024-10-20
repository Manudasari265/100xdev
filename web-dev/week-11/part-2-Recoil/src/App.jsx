import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState} from 'recoil';
import { counterAtom } from './store/atoms/counter';

//! Revise memo react api once the recoil examples are done

function App() {

  return (
    <RecoilRoot>
      <Counter/>
    </RecoilRoot>
  )
}

function Counter() {
  return <div>
    <CurrentCount />
    <Increase/>
    <Decrease/>
  </div>
}

function CurrentCount() {
  const count = useRecoilValue(counterAtom);

  return <div>
    {count}
  </div>
}

function Decrease() {
  const setCount = useSetRecoilState(counterAtom);

  function decrease() {
    setCount(c => c + 1)
  }

  return <div>
    <button onClick={decrease}>Decrease</button>
  </div>
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom);

  function increase() {
    setCount(c => c - 1)
  }

  return <div>
    <button onClick={increase}>Increase</button>
  </div>
}

export default App
