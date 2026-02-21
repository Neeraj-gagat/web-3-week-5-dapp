import './App.css'
// import React, { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
    WalletConnectButton
} from '@solana/wallet-adapter-react-ui';
// import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import { Airdrop } from './components/Airdrop';

function App() {

  // const network = WalletAdapterNetwork.Devnet;

  //   // You can also provide a custom RPC endpoint.
  //   const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  return (
    <>
       <ConnectionProvider config={{commitment: "confirmed"}} endpoint={"https://api.devnet.solana.com"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                    <div className='flex flex-col items-center justify-center gap-3 pt-10'>
                      <WalletMultiButton />
                    <WalletDisconnectButton />
                      <Airdrop/>
                    </div>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    </>
  )
}

export default App
