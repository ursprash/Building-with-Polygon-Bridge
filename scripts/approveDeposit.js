// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/MyNFT.sol/MyNFT.json");

const tokenAddress = "0xA3453E96913962aAAd0AE9aFd627225041104aAf"; 


const FxERC721RootTunnel="0xF9bc4a80464E48369303196645e876c8C7D972de";
const walletAddress = "0x0D53f8320766e9384846Da681dbd51db9D1Ef228"; 

async function main() {

    const tokenContract = await hre.ethers.getContractAt(contract.abi, tokenAddress);
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, FxERC721RootTunnel);

    const approveTx = await tokenContract.approve(FxERC721RootTunnel, 500);
    await approveTx.wait();

    console.log('Approval confirmed');


    const depositTx = await fxContract.deposit(tokenAddress, walletAddress, 500, "0x6556");
    await depositTx.wait();

    console.log("Tokens deposited");
  
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });