const hre = require("hardhat");

async function main() {

  const contract = await hre.ethers.getContractFactory("BlockCred");
  const del = await contract.deploy();
  console.log("The address of contract: " + await del.getAddress());
}

// 0x164687CA6bD62e40A567fc5C8ed10830f4821512:Contract Address is Deployed Polygon Mumbai

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});