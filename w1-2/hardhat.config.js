require("@nomicfoundation/hardhat-toolbox");
PRIVATE_KEY1 = "141bcb88f90048e831f3ac71c90485753415b5dd19822ca650fea5924aec0eda"
API_KEY = "7HAZ179JYVFJFM7M11IP8E3VIIBZ9Q3H1Q"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: "https://eth-goerli.api.onfinality.io/public",
      accounts: [PRIVATE_KEY1],
      chainId: 5,
    },
  },
  etherscan:{
    apiKey:"7HAZ179JYVFJFM7M11IP8E3VIIBZ9Q3H1Q"
},
};
