const Hats = artifacts.require("./Hats.sol");

module.exports = function(deployer) {
  deployer.deploy(Hats);
};