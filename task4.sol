// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract ledger {
    struct user{
        string name;
        uint pin;
        bool isExisting;
    }
    mapping (address =>uint) public database;
    mapping (address=>user) public accDet;

    function addUser (address _accAddress, string memory _name, uint _pin, uint _balance) public isValid(_accAddress) isRedundant(_accAddress) {
        user memory temp;
        temp.name= _name;
        temp.pin= _pin;
        temp.isExisting= true;

        accDet[_accAddress]= temp;
        database[_accAddress]= _balance;
    }

    function sendAmt (address _accAddress, uint _pin, address _receiver, uint _amount) public isValidSender(_accAddress, _pin) isValid(_receiver) isExistsUser(_accAddress) isExistsUser(_receiver) isValidTransanction(_accAddress, _receiver) isEnoughMoney(_accAddress, _amount) {
        database[_receiver]+= _amount;
        database[_accAddress]-= _amount;
    }

    modifier isValidSender(address toCheck, uint _pin) {
        require(((toCheck!=address(0)) && accDet[toCheck].pin==_pin) , "not valid");
        _;
    }

    modifier isValid(address toCheck) {
        require(toCheck!=address(0) , "not valid");
        _;
    }

    modifier isRedundant (address toCheck) {
        require(accDet[toCheck].isExisting==false, "already exists");
        _;
    }

    modifier isExistsUser(address toCheck) {
        require(accDet[toCheck].isExisting==true, "user doesn't exist");
        _;
    }

    modifier isValidTransanction (address toSend, address toReceive) {
        require(toSend!=toReceive, "invalid transanction");
        _;
    }

    modifier isEnoughMoney (address toSend, uint money) {
        require(database[toSend]>=money, "not enough money");
        _;
    }
}