//0x2c3B42CF7A956BdDbFf58B34E150F2760e7f42D6
const hre = require("hardhat");

async function main() {
     const Chai = await hre.ethers.getContractFactory("chai"); //fetching bytecode and ABI
     const ChaiDapp = await Chai.deploy(); //creating an instance of our smart contract
   
     //deploying your smart contract
   
     console.log("Deployed contract address:",`${await ChaiDapp.getAddress()}`);
   }
   
   // We recommend this pattern to be able to use async/await everywhere
   // and properly handle errors.
   main().catch((error) => {
     console.error(error);
     process.exitCode = 1;
   });



//    require("@nomicfoundation/hardhat-toolbox");
// require("dotenv").config();
// /** @type import('hardhat/config').HardhatUserConfig */
// const ALCHEMY_URL = process.env.ALCHEMY_URL
// const PRIVATE_KEY = process.env.PRIVATE_KEY


// module.exports = {
//   solidity: "0.8.19",
//   networks: {
//     sepolia: {
//       url: ALCHEMY_URL,
//       accounts: [PRIVATE_KEY],
//     },
//   },
// };