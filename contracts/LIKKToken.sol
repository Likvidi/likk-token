//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract LIKKToken is ERC20Burnable {
  constructor(
  )
  ERC20("Likvidi Kredits", "LIKK")
  {
    _mint(msg.sender, 1_000_000_000 ether);
  }
}
