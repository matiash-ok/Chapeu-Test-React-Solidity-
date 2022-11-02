// SPDX-License-Identifier: MIT
pragma solidity ^ 0.8.0;

contract Hats{
    uint private randNonce = 0;

    struct Hat{
        uint id;
        string name;
        string color;
    }

    event HatCreated(
        uint id,
        string name,
        string color
    );

    event StartLottery(
          bool win
    );


    mapping(address => mapping(uint => Hat)) public hats;
    mapping(address =>uint ) public hatsCount;

    function createHat(string memory _name,string memory _color) public {
        uint hatCount = hatsCount[msg.sender];
        hats[msg.sender][hatCount] = Hat(hatCount, _name , _color);
        emit HatCreated(hatCount, _name, _color);
        hatsCount[msg.sender]++;
    }

    function startLottery(uint _position , string memory _color,string memory _name) public returns(bool) {
        bool win = false;
        randNonce++; 
        uint randInt;
        uint randomNumber = uint(keccak256(abi.encodePacked(block.timestamp,msg.sender,randNonce))) % 100;
        if(randomNumber >= 66) randInt = 3 ;
        if(randomNumber < 33) randInt = 1;
        if(randomNumber >= 33 && randomNumber < 66 ) randInt = 2;

        if(_position == randInt){
            createHat(_name,_color);
            win = true;
        }
        emit StartLottery(win);
        return win;
    }

    function randMod(uint _modulus) internal returns(int){
         randNonce++; 
         uint randomNumber = uint(keccak256(abi.encodePacked(block.timestamp,msg.sender,randNonce))) % _modulus;
         if(randomNumber >= 66) return int(3);
         if(randomNumber < 33) return int(1);
         if(randomNumber >= 66) return int(3);
         return int(4);
        }

}