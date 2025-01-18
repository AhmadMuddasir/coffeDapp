"use client";

import { useEffect, useState } from "react";
//the abi is copied from the atrfticts to public for better access of data
import abi from "../../public/chai";
import { ethers } from "ethers";
import { Buy } from "@/components/Buy";
import { Header } from "@/components/Header";
import { Memo } from "@/components/Memo";
import GetParticularData from "@/components/GetParticularData";


export default function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("Not connected");

  useEffect(() => {
    const template = async () => {
      try {
        const contractAddress = "0x64F9B34C5279a543e4c63B50D7b8f65EA4C862fD";
        const contractABI = abi.abi;

        // Ensure Metamask is available
        if (!window.ethereum) {
          console.error("Metamask is not installed.");
          return;
        }

        const account = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        setAccount(account[0]);

        window.ethereum.on("accountsChanged", () => {
          window.location.reload(); // Reload the page on account change
        });

        const provider = new ethers.BrowserProvider(window.ethereum); // Updated from Web3Provider
        const signer = await provider.getSigner(); // getSigner now returns a Promise



        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        console.log(contract);
        setState({provider, signer, contract});
      } catch (error) {
        console.log(error);
      }
    };

    template();
  }, []);

  return (
    <>
      <div className="flex relative m-2 ">
        <p className="bg-slate-400 m-2 p-2 rounded-sm text-xl  font-bold">
          Accounts Connected:{account}
        </p>
      </div>
      <Header />
      <Buy state={state} />
      <GetParticularData state={state} />
      <Memo state={state} />
    </>
  );


// ac198520dda1de939adca33c6fe6c33d15984552
}
