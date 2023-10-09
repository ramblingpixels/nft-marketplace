const Kryptobirdz = artifacts.require("KryptoBird");

module.exports = function(deployer) {
	deployer.deploy(KryptoBird);
};
