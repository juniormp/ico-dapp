require('dotenv').config();

const { QUICKNODE_HTTP_URL, PRIVATE_KEY } = process.env;
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 9545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
    goerli: {
      provider: () => new HDWalletProvider(PRIVATE_KEY, QUICKNODE_HTTP_URL),
      network_id: '5', // eslint-disable-line camelcase
    },
  },
  compilers: {
    solc: {
      version: "0.8.17", // Fetch exact version from solc-bin (default: truffle's version)
        settings: {
          optimizer: {
          enabled: true,
          runs: 1000 
        },
      }
    }
  }
};
