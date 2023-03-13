//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Counter {
    uint public counter;
    address owner;
    constructor() {
        owner = msg.sender;
        counter = 0;
    }

    function count() public {
        if(msg.sender == owner){
        counter = counter + 1;
        }
    }
}