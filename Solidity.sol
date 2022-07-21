// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;


contract accountDetails{
    address public sender = msg.sender;

    mapping (address => uint) public acc_det;
    function add_acc(address ac_address, uint ac_balance) public {
        ac_det[acc_address]=ac_balance

    modifier check_address(address newaddress){
        require(newaddress!=address(0),"Receiver address is invalid");
        _;
    }
    modifier self_transfer(address newaddress){
        require(newaddress!=sender, "You cannot transfer to yourself");
        _;
    }
    modifier suff_balance(uint transferAmount){
        require(transferAmount<=ac_det[sender],"Not Sufficient balance");
        _;
    }


    function transferBalance(address newaddress, uint transferAmount) public check_address(newaddress) self_transfer(newaddress) suff_balance(transferAmount){
        ac_det[sender]-=transferAmount;
        ac_det[newaddress]+=transferAmount;
    }
}