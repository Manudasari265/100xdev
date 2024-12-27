import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, useAccount, useConnect, useConnectors, useDisconnect } from 'wagmi'
import './App.css'
import { config } from './config/config'

const client = new QueryClient();

function App() {

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <ConnectWallet />
     </QueryClientProvider>
    </WagmiProvider>
  )
}

function ConnectWallet() {
  const { address } = useAccount()
  const connectors = useConnectors()
  const { disconnect } = useDisconnect();
  const {connect} = useConnect();

  if (address) {
    return <div>
      You are connected {address}
      <button onClick={() => {
        disconnect()
      }}>Disconnect</button>
    </div>
  }

  return <div>
    {connectors.map(connector => <button onClick={() => {
      connect({connector: connector})
    }}>
      Connect via {connector.name}
    </button>)}
  </div>
}

export default App