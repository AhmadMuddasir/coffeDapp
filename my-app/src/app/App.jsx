"use client";

import { useEffect, useState } from "react";
import abi from "../../public/chai";


export default function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account,setAccount] = useState('Not connected');

  useEffect(()=>{
     const template = async () => {
          try {
            const contractAddress = "0x64F9B34C5279a543e4c63B50D7b8f65EA4C862fD";
            const contractABI = abi.abi;
            console.log(contractABI)
    
            // Ensure Metamask is available
            if (!window.ethereum) {
              console.error("Metamask is not installed.");
              return;
            }
    
            const account = await window.ethereum.request({
              method: "eth_requestAccounts",
            });
            setAccount(account);
    
            const provider = new ethers.providers.Web3Provider(ethereum);//read the blockchain
            const signer  =  provider.getSigner();//write the blockchain

            const contract = new ethers.Contract(
              contractAddress,
              contractABI,
              signer
            )

            setState(provider,signer,contract);


    
          } catch (error) {
            console.log(error);
          }
        };
    
        template();
  },[])



  return(
    <div className="flex relative m-2 ">

    <p className="bg-slate-400 m-2 p-2 rounded-sm text-xl  font-bold">
      Accounts Connected:{account}
    </p>
    </div>
  ) 
}