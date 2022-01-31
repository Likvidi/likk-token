//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

//import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./lossless/LERC20.sol";

contract LIKKToken is LERC20 {
  constructor(
    address losslessAdmin,
    address losslessRecoveryAdmin,
    uint256 losslessTimelockPeriod,
    address losslessContract
  )
  LERC20(
    1_000_000_000 ether,
    "Likvidi Kredits",
    "LIKK",
    losslessAdmin,
    losslessRecoveryAdmin,
    losslessTimelockPeriod,
    losslessContract
  )
  {
  }
}
