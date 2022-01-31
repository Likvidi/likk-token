//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../lossless/LERC20.sol";

contract MockLosslessController is ILosslessController {
  function beforeTransfer(address sender, address recipient, uint256 amount)
  external
  override
  {
  }

  function beforeTransferFrom(address msgSender, address sender, address recipient, uint256 amount)
  external
  override
  {
  }

  function beforeApprove(address sender, address spender, uint256 amount)
  external
  override
  {
  }

  function beforeIncreaseAllowance(address msgSender, address spender, uint256 addedValue)
  external
  override
  {
  }

  function beforeDecreaseAllowance(address msgSender, address spender, uint256 subtractedValue)
  external
  override
  {
  }
}