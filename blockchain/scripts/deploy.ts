import { ethers } from 'hardhat';

async function main() {
  console.log('Contract is deploying...');
  const pokemonContract = await ethers.deployContract('Pokemon', []);

  try {
    await pokemonContract.waitForDeployment();
  } catch (error) {
    console.error('An error occurred during deployment:', error);
  }

  console.log(`My404 contract is deployed. Token address: ${pokemonContract.target}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('An error occurred:', error);
    process.exit(1);
  });
