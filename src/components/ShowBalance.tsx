import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";

export const ShowBalance = () => {
    const {publicKey, connected} = useWallet();
    const {connection} = useConnection();
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        async function fetchBalance() {
            if (!connected || !publicKey) return 

            try {
                const balance = await connection.getBalance(publicKey);
                setBalance(balance / LAMPORTS_PER_SOL);
            } catch (err) {
                console.error("Error fetching balance:", err);
            }
        }
        fetchBalance();
    }, [connection,publicKey, connected])


    return (
        <div className="flex flex-col items-center pt-10">
            <p className="uppercase font-bold text-green-700 mb-2 border p-2 rounded-lg">wallet balance</p>
            <p className="text-pink-600 font-bold">balance: {connected ? balance + "SOL" : "NOT CONNECTED"}</p>
        </div>
    )
}