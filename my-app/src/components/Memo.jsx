'use client'

import { useEffect, useState } from "react";



export const Memo = ({state}) => {
  const [memos,setMemos] = useState([]);

  useEffect(()=>{
    const getMemo = async()=>{
      const {contract} = state;
      const memo = await contract.getMemos();
      console.log(memo);
      setMemos(memo);

  }},[]);
  // getMemo();
  return (
    <div>thisis memo{memos}</div>
  )

  }
 


