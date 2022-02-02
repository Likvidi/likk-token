//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";

contract LIKKToken is ERC777 {
  constructor(
    address[] memory defaultOperators
  )
  ERC777("Likvidi Kredits", "LIKK", defaultOperators)
  {
    _mint(msg.sender, 1_000_000_000 ether, "", "");
  }
}
