const hre = require("hardhat");

async function main() {

  const contract = await hre.ethers.getContractFactory("BlockCred");
  const del = await contract.deploy();
  console.log("The address of contract: " + await del.getAddress());
}

// 0x15711b4CD7fc52c5b98905eAa1aADcd21a4A8d33:Contract Address is Deployed Polygon Mumbai

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});