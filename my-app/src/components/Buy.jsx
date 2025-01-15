import React from 'react'
import { ethers } from 'ethers';

export const Buy = ({state}) => {

     const buyChai = async()=>{
          event.preventDefault();
          const {contract} = state;
          const name = document.querySelector("#name").value;
          const number = document.querySelector("#number").value;
          const amount = {value:ethers.parseEther("0.001")}
          console.log(name,number,amount)

          const tnx = await contract.buyChai(name,number)
     }
  return (
    <div className=' m-2 p-2 bg-gray-500'>
     <p className='text-2xl capitalize'>give you details:</p>
     <form className='flex w-[30%] flex-col text-black' onSubmit={buyChai}>
          <input id='name' className='m-2 p-1 text-2xl outline-none' placeholder='Name' type="text" />
          <input id='number' className='m-2 p-1 text-2xl outline-none' placeholder='Phone No.' type="text" />
          <button className='' type='submit' >CLIck</button>
         
     </form>
    </div>
  )
}
