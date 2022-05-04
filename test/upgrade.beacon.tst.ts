import { expect } from "chai";
import { ethers, upgrades } from "hardhat";

describe("Box", () => {
  it("works", async () => {
    const Box = await ethers.getContractFactory("Box");
    const BoxV2 = await ethers.getContractFactory("BoxV2");

    const beacon = await upgrades.deployBeacon(Box);
    const instance = await upgrades.deployBeaconProxy(beacon, Box, [42]);

    await upgrades.upgradeBeacon(beacon, BoxV2);
    const upgraded = BoxV2.attach(instance.address);

    const value = await upgraded.Version();
    expect(value.toString()).to.equal("42");
  });
});
