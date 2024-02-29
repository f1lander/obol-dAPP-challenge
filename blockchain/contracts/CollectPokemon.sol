//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Pokemon is ERC721, Ownable {
    uint256 public constant MAX_SUPPLY = 1302;
    uint256 public totalSupply;

    constructor() ERC721("Pokemon", "PKMN") Ownable(msg.sender) {
        totalSupply = 0;
    }

    function collectPokemon(address to, uint256 tokenId) public {
        require(totalSupply < MAX_SUPPLY, "Max supply reached for Pokemon.");
        _safeMint(to, tokenId);
        totalSupply++;
    }
}
