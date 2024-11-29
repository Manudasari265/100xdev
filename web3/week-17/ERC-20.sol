// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract ManojCoin {
    address public owner;
    mapping(address => uint) public balances;
    uint public totalSupply = 0;

    constructor() {
        owner = msg.sender;
    }

    function mint(uint amount) public {
        require(owner == msg.sender);
        balances(owner) += amount;
        totalSupply += amount;
    }

    function mintTo(uint amount, address to) public {
        require(owner == msg.sender);
        balances(to) += amount;
        totalSupply += amount;
    }

    function transfer(uint amount, address to) public {
        uint existingBalance = balances(msg.sender);
        require(existingBalance >= amount);
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }
    
    function burn(uint amount) public {
        uint balance = balances[msg.sender];
        require(balance >= amount, "You don't have enough balance");
        balances[msg.sender] -= amount;
        totalSupply -= amount;
    }
}