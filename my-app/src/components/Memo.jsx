'use client'

import {  useEffect, useState } from "react";



export const Memo = ({state}) => {
  const [memos,setMemos] = useState([]);
  const {contract} = state;

  useEffect(()=>{
    const getMemo = async()=>{
      try {
        
        const memo = await contract.getMemos();
        setMemos(memo);
        console.log(memo)
      } catch (error) {
        console.log(error)
      }
  }
  contract && getMemo();
},[contract]);


  return (
    <div className="overflow-x-auto mt-4">
      <h2 className="flex itmes-center text-4xl font-bold ">Get all Transaction Data</h2>
      <table className="w-full">
        <thead>
          <tr className="">
            <th className="px-6 py-3 text-left">#</th>
            <th className="px-6 py-3 text-left">Name</th>
            <th className="px-6 py-3 text-left">Phone Number</th>
            <th className="px-6 py-3 text-left">Date</th>
            <th className="px-6 py-3 text-left">From</th>
          </tr>
        </thead>
        <tbody>
          {memos.map((data,index)=>(

            <tr key={index}>
              <td className="px-6 py-3 text-left">{index}</td>
              <td className="px-6 py-3 text-left">{data.name}</td>
              <td className="px-6 py-3 text-left">{data.phoneNumber}</td>
              <td className="px-6 py-3 text-left">
  {(() => {
    const timestamp = Number(data.timestamp); // Convert BigInt to Number
    const date = new Date(timestamp * 1000 ); // Check if in seconds or milliseconds
    return date.toLocaleDateString();
  })()}
</td>
              <td className="px-6 py-3 text-left">{data.from}</td>
            </tr>
          )
          
          )}
        </tbody>
      </table>
    </div>


    
  )

  }
 


