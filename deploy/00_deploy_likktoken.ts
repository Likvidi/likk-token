import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

/*
 * Lossless controller addresses
 * Mainnet addresses:
 * ETH 0xe91D7cEBcE484070fc70777cB04F7e2EfAe31DB4
 * POLYGON 0x66622e2C1b991983e88132da19b2C31f71009035
 * AVALANCHE 0xe5b5753cFEaD850f7069b05B3A76645Af63A9102
 * BSC 0xDBB5125CEEaf7233768c84A5dF570AeECF0b4634
 * FANTOM 0xDBB5125CEEaf7233768c84A5dF570AeECF0b4634
 * HARMONY (SHARD 0) 0xDBB5125CEEaf7233768c84A5dF570AeECF0b4634
 *
 * Testnet addresses:
 * ROPSTEN 0x27fce20D62f1DE73B0Ae1Dc7572F881061692de9
 * BSC TESTNET 0xC46236F780f1294B2C2a8c3cE5B4d62258dC2619
 * MUMBAI (POLYGON TESTNET) 0x29C2541d25091B565c6999f20549EB2c75b7c269
 * HARMONY TESTNET (SHARD 0) 0xe91D7cEBcE484070fc70777cB04F7e2EfAe31DB4
 * AVALANCHE FUJI 0xF601afcc4A2a1f991bf46AE37Fa87C9732aBbF84
 * FANTOM TESTNET 0xBEDba51A30CD4c8d708E038943dE0b3f0A089776
 */

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  // TODO: implement
  const {deploy} = hre.deployments;
  const {deployer} = await hre.getNamedAccounts();
  await deploy('ExampleToken', {
    from: deployer,
    args: [],
    log: true,
  });
};
export default func;