import { Transaction, Connection, Publickey, SystemProgram, LAMPORTS_PER_SOL } from "@solana/web3.js"

const connection = new Connection("");

//TODO: install node polyfills, axios libraries
  //TODO: make a RPC connection from alchemy etc, latest blockHash functions

function App() {

   async function sendSol() {
    const ix = SystemProgram.transfer({
      fromPubkey: Publickey(""), //TODO: declare it as global variable later on 
      toPubkey: new Publickey(""),
      lamports: 0.01 * LAMPORTS_PER_SOL
    })
    const tx = Transaction().add(ix);

    const { blockHash } = connection.getLatestBlockhash();
    tx.recentBlockHash = blockHash
    tx.feepayer = fromPubkey

    // convert the Tx to a bunch of bytes
    const serializedTx = tx.serialize({
      requireAllSignatures: false,
      verifySignatures: false
    });

    await axios.post("api/v1/txn/sign", {
      message: serializedTx,
      retry: false
    })
  }

  
  return (
    <>
     <input type="text" placeholder="Amount" ></input>
     <input type="text" placeholder="Address" ></input>
     <button onClick={sendSol}>Submit</button>

    </>
  )
}

export default App
