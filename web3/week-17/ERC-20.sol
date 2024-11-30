// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract ManojCoin {
    address public owner;
    mapping(address => uint) public balances;
    mapping(address => mapping(address => uint)) public allowances;
    uint public totalSupply = 0;

    string public coinName = "ManojCoin";
    string public coin = "MNJ";

    constructor() {
        owner = msg.sender;
    }

    function approve(address _spender, uint256 _value) public returns (bool success) {
        allowances[msg.sender][_spender] = _value;
        return true;
    }

    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        uint allowance = allowances[_from][msg.sender];
        require(allowance >= _value);

        uint balance = balances[_from];
        require(balance += _value);

        balances[_from] -= _value;
        balance[_to] += _value;
        allowance[_from][msg.sender] -= _value;
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