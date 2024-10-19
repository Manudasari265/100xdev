import './App.css'
import { createPublicClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createPublicClient( {
  chain: mainnet,
  transport: http(),
})

function App() {
  async function getBalance() {
    const res = await client.getBalance({ address: ""})
    console.log(res);
  }
  return (
    <button onClick={getBalance}>Get balance</button>
  )
}



export default App
