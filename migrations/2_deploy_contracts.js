const CryptoDevTokens = artifacts.require("CryptoDevTokens");

module.exports = function(deployer) {
  const cryptoDevsNFTAddress= "0x766931a8c7180fE7935e1d9F4Da9F5Eb866840a0";
  
  deployer.deploy(CryptoDevTokens, cryptoDevsNFTAddress);
};
