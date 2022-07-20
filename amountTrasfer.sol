// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Ownable{
  mapping(address => int) public address_balance;
  function add_details(address _add,int _balance) public {
      address_balance[_add] = _balance;
  }
  modifier is_balance_sufficent(address _add,int _amt){
      require(address_balance[_add] - _amt >= 0,"Balance Insufficent");
      _;
  }
  modifier is_owner(address _address){
      require (msg.sender == _address,"You are not the owner....Access denied!!");
      _;
  }
  function transfer(address _from,address _reci, int _amount) public is_owner(_from) is_balance_sufficent(_from,_amount){
      address_balance[_from] -= _amount;
      address_balance[_reci] += _amount;
}
}
   
