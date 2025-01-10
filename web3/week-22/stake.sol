// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract StakeContract {
    mapping(address => uint) public stakes;
    uint public totalStake;

    constructor() {

    }

    function stake(uint _amount) public payable{
        require(_amount > 0);
        require(_amount == msg.value);
        stakes[msg.sender] += _amount;
        totalStake += _amount;
    }

    function unstake(uint _amount) public {
        require(stakes[msg.sender] >= _amount);
        payable(msg.sender).transfer(_amount);
        totalStake -= _amount;
        stakes[msg.sender] -= _amount;
    }
}