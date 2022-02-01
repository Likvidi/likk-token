/**
 * LIKK token tests
 *
 * The token is just a simple extension of OpenZeppelin ERC20.sol,
 * as outlined in https://docs.openzeppelin.com/contracts/4.x/erc20
 *
 * So these tests need not test very much.
 */
import {expect} from 'chai';
import {describe, it, beforeEach} from 'mocha';
import {ethers} from 'hardhat';
import {Contract, Signer, utils} from 'ethers';

const {parseEther} = utils;

describe("LIKKToken", function() {
  let likkToken: Contract;
  let ownerAccount: Signer;
  let anotherAccount: Signer;
  let ownerAddress: string;
  let anotherAddress: string;

  beforeEach(async () => {
    const accounts = await ethers.getSigners();
    ownerAccount = accounts[0];
    anotherAccount = accounts[1];
    ownerAddress = await ownerAccount.getAddress();
    anotherAddress = await anotherAccount.getAddress();

    const LIKKToken = await ethers.getContractFactory("LIKKToken");
    likkToken = await LIKKToken.deploy();
    await likkToken.deployed();
  });

  it("totalSupply", async () => {
    const expectedTotalSupply = parseEther('1 000 000 000'.replace(/ /g, ''));
    expect(await likkToken.totalSupply()).to.be.equal(expectedTotalSupply);
    expect(await likkToken.balanceOf(ownerAddress)).to.be.equal(expectedTotalSupply);
  });

  it("symbol", async () => {
    expect(await likkToken.symbol()).to.be.equal('LIKK');
  });

  it("name", async () => {
    expect(await likkToken.name()).to.be.equal('Likvidi Kredits');
  });

  it("decimals", async () => {
    expect(await likkToken.decimals()).to.be.equal(18);
  });

  // TODO: test burn
});
