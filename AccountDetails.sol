// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;


contract accountDetails{
    address public sender = msg.sender;

    mapping (address => uint) public acc_details;
    function add_acc(address acc_address, uint acc_bal) public {
        acc_details[acc_address]=acc_bal;
    }


    modifier check_address(address newaddress){
        require(newaddress!=address(0),"receiver address is not valid");
        _;
    }
    modifier self_transfer(address newaddress){
        require(newaddress!=sender, "cannot transfer to yourself");
        _;
    }
    modifier suff_balance(uint transferAmount){
        require(transferAmount<=acc_details[sender],"insufficient balance");
        _;
    }
    // modifier acc_exists(address newaddress){
    //     require(acc_details[newaddress]==0, "account already exists");
    //     _;
    // }
    //          this wont work since everything is initially zero


    function transferBalance(address newaddress, uint transferAmount) public check_address(newaddress) self_transfer(newaddress) suff_balance(transferAmount){
        acc_details[sender]-=transferAmount;
        acc_details[newaddress]+=transferAmount;
    }
}