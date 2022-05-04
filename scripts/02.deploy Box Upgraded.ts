import { ethers, upgrades } from "hardhat";

const proxyAddress = "0xF6A0EAea8D32696cC9Db59D08a62192B3c4aC12f";
async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  const upgraded = await upgrades.upgradeProxy(proxyAddress, BoxV2);
  console.log((await upgraded.area()).toString());
  console.log((await upgraded.perimeter()).toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
