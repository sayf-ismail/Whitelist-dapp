const {ethers} = require("hardhat")

async function main() {
  // create the instance
  const whitelistContract = await ethers.getContractFactory("Whitelist");

  // input 10 into the constructor
  const deployedWhitelistContract = await whitelistContract.deploy(10);

  await deployedWhitelistContract.deployed();

  console.log("Whitelist Contract Address", deployedWhitelistContract.address);
}
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });

    // Whitelist Contract Address 0x46680152B7Edfd31E9aF8620cC95E91a8B8B935A
    // Updated 20 Jul '22: 0x06D6d6C5a304b88c28544bE739aD927F2e844D79