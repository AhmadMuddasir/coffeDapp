// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
contract chai {

    struct Memo{
        string name;
        uint phoneNumber;
        uint timestamp;
        address from;
    }

    Memo[] memos;
    mapping(uint=>uint)  getParticularIndex;

    address payable owner;

    constructor(){
        owner = payable(msg.sender);
    }

    function buyChai(string calldata name,uint phoneNumber) external payable{
        require(msg.value>0,"very less ether");
        uint index = memos.length;
        getParticularIndex[phoneNumber] = index;
        owner.transfer(msg.value);
        memos.push(Memo(name,phoneNumber,block.timestamp,msg.sender));
    }

    function getMemos()external view returns(Memo[] memory){
        return memos;
    }
    function getParticulardata(uint phoneNumber) external view returns(Memo memory){
        uint index = getParticularIndex[phoneNumber];
        return memos[index];
    }

}
