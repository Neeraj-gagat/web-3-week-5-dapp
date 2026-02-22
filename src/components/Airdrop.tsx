import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { useState } from "react";
 import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

export function Airdrop() {
    // const [value , setValue] = useState(0)
    const wallet = useWallet();
    const {connection} = useConnection();
    
    async function sendAirdrop() {
  if (!wallet.publicKey) return;

  try {
    const amount = (document.getElementById("amountsol") as HTMLInputElement | null)?.value;
    if (!amount) {
      alert("Please enter an amount");
      return;
    }

    // Use the public devnet endpoint just for airdrop
    const devnetConnection = new Connection("https://api.devnet.solana.com", "confirmed");

    const signature = await devnetConnection.requestAirdrop(
      wallet.publicKey,
      Number(amount) * LAMPORTS_PER_SOL
    );

    const { blockhash, lastValidBlockHeight } = await devnetConnection.getLatestBlockhash();
    await devnetConnection.confirmTransaction({ signature, blockhash, lastValidBlockHeight });

    alert(`Airdropped ${amount} SOL to ${wallet.publicKey.toString()}`);
  } catch (err) {
    alert("Airdrop failed: " + err);
  }
}

    return (
        <div className="flex flex-col items-center pt-10">
            <p className="uppercase font-bold text-green-700 mb-2 border p-2 rounded-lg">wallet publickey</p>
            <p>{wallet.publicKey ? wallet.publicKey.toString() : "no wallet connected"}</p>
            <p>Airdrop yourself some SOL to get started!</p>
            <div className="flex justify-center pt-5">
               <input id="amountsol" className="bg-white border border-gray-300 rounded-l-lg p-2" type="text" placeholder="Amount" />
               <button onClick={sendAirdrop} className="hover:cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-r-lg">Airdrop</button>
            </div>
            
        </div>
    )
}