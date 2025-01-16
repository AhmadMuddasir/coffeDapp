import React from 'react'
import { ethers } from 'ethers';

export const Buy = ({state}) => {

     const buyChai = async()=>{
          try {
               event.preventDefault();
               const {contract} = state;
               const name = document.querySelector("#name").value;
               const number = document.querySelector("#number").value;
               const amount = {value:ethers.parseEther("0.001")}
               console.log(name,number,amount)
     
               const tnx = await contract.buyChai(name,number,amount)
               await tnx.wait();
              alert("transaction from account:",tnx.from);
               
          } catch (error) {
               console.log(error)
               alert("transaction failed")
          }
     }
  return (
    <div className=' m-2 p-2 bg-gray-500'>
     <p className='text-2xl capitalize'>give you details:</p>
     <form className='flex w-[30%] flex-col text-black' onSubmit={buyChai}>
          <p className='text-2xl ml-2 '>Name:</p>
          <input id='name' className='m-2 p-1 text-2xl outline-none' placeholder='Name' type="text" />
          <p className='text-2xl ml-2 '>phone Number:</p>
          <input id='number' className='m-2 p-1 text-2xl outline-none' placeholder='Phone No.' type="text" />
          <button className='bg-blue-400 mt-2 ml-2 p-2 font-bold rounded-sm' type='submit' >Pay:0.001</button>
         
     </form>
    </div>
  )
}
