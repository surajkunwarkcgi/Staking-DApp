// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ERC20 {
    function transfer(address recipient, uint amount) external returns (bool);

    function balanceOf(address account) external view returns (uint);

    function allowance(
        address owner,
        address spender
    ) external view returns (uint);

    function approve(address spender, uint amount) external returns (bool);

    function transferFrom(
        address spender,
        address recipient,
        uint amount
    ) external returns (bool);

    function symbol() external view returns (string memory);

    function totalSupply() external view returns (uint);

    function name() external view returns (string memory);
}

contract TokenICO {
    address public owner;
    address public tokenAddress;
    uint public tokenSalePrice;
    uint public soldTokens;

    modifier onlyOwner() {
        require(
            msg.sender == owner,
            "Only contract owner can perform this action"
        );
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function updateToken(address _tokenAddress) public onlyOwner {
        tokenAddress = _tokenAddress;
    }

    function updateTokenSalePrice(uint _tokenSalePrice) public onlyOwner {
        tokenSalePrice = _tokenSalePrice;
    }

    function multiply(uint x, uint y) internal pure returns (uint z) {
        require(y == 0 || (z = x * y) / y == x);
    }

    function buyToken(uint _tokenAmount) public payable {
        require(
            msg.value == multiply(_tokenAmount, tokenSalePrice),
            "Insufficient Ether provided for the token purchase"
        );
        ERC20 token = ERC20(tokenAddress);
        require(
            _tokenAmount <= token.balanceOf(address(this)),
            "Insufficient token"
        );
        require(token.transfer(msg.sender, _tokenAmount * 1e18));
        payable(owner).transfer(msg.value);
        soldTokens += _tokenAmount;
    }

    function getTokenDetails()
        public
        view
        returns (
            string memory name,
            string memory symbol,
            uint balance,
            uint supply,
            uint tokenPrice,
            address tokenAddr
        )
    {
        ERC20 token = ERC20(tokenAddress);
        return (
            token.name(),
            token.symbol(),
            token.balanceOf(address(this)),
            token.totalSupply(),
            tokenSalePrice,
            tokenAddress
        );
    }

    function withdrawAllTokens() public onlyOwner {
        ERC20 token = ERC20(tokenAddress);

        uint balance = token.balanceOf(address(this));
        require(balance > 0, "No token to withdraw");
        require(token.transfer(owner, balance));
    }
}
