// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter{
    uint public counter = 0;
    function add(uint x) public returns(uint){
        counter = counter + x;
        return counter;
    }
    function add() public returns(uint){
        counter = counter + 1;
        return counter;
    }
}