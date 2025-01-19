"use client";

import React, { useEffect, useState } from "react";

const GetParticularData = ({ state }) => {
  const { contract } = state;
  const [number, SetNumber] = useState("");
  const [cutomerRecord, GetCustomerRecord] = useState([]);
  const [data, setData] = useState(false);

  const getparticularData = async () => {
    const Number = parseInt(number, 10);
    const MyContract = await contract.getParticulardata(Number);
    GetCustomerRecord(MyContract);
    setData(true);

    console.log(cutomerRecord.name);
  };
  

  const handleChange = (e) => {
    const number = e.target.value;
    SetNumber(number);
    console.log(number);
  };

  return (
    <div className="flex justify-center items-center flex-col w-full m-2 p-2 bg-gray-500">
      <div className="flex flex-col w-[50%]">
        <div className="bg-slate-500  m-2 p-2">
          <h2 className="mb-4 text-3xl  font-bold text-white">
            Get Particular customer details
          </h2>
          <div>
            <input
              type="text"
              onChange={handleChange}
              value={number}
              placeholder="phone Number"
              className=" text-black  text-2xl outline-none border-none p-2 m-2 rounded-sm "
              required
            />
          </div>
          <button
            className="bg-blue-400 text-xl mt-2 ml-2 p-2 w-[310px] font-bold rounded-sm"
            onClick={getparticularData}
          >
            Get Customer Details
          </button>
          <ul className="flex flex-col items-center justify-around w-[100%]">
            {data ? (
              <div className="text-2xl font-bold mt-8">
                <p className="text-4xl ">Customer Details:</p>
                <p className=" my-2 p-1">Name:{cutomerRecord.name}</p>
                <p className=" my-2 p-1">
                  PHONE NO.:{cutomerRecord.phoneNumber}
                </p>
                <p className=" my-2 p-1">
                  DATE:
                  {(() => {
                    const date = new Date(Number(cutomerRecord.timestamp) * 1000); 
                    return date.toLocaleDateString();
                  })()}
                </p>
                <p className=" my-2 p-1">address:{cutomerRecord.from}</p>
              </div>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GetParticularData;
