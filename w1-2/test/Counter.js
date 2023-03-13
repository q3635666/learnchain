const { ethers } = require("hardhat");
const { expect } = require("chai");

let counter;

describe("Counter", function () {
  async function init() {
    const [owner, otherAccount] = await ethers.getSigners();
    const Counter = await ethers.getContractFactory("Counter");
    counter = await Counter.deploy();
    await counter.deployed();
    console.log("counter:" + counter.address);
  }

  before(async function () {
    await init();
  });
  it("初始化:返回0", async function () {
    expect(await counter.counter()).to.equal(0);
  });

  // 
  it("owner调用:counter+1返回1", async function () {
    let tx = await counter.count();
    await tx.wait();
    expect(await counter.counter()).to.equal(1);
  });

  it("otherAccount调用:counter不变返回1", async function () {
    const [owner, otherAccount] = await ethers.getSigners();
    let tx = await counter.connect(otherAccount).count();
    await tx.wait();
    expect(await counter.counter()).to.equal(1);
  });
});