module.exports = {
	networks: {
		development: {
			host: "localhost",
			port: 7545,
			network_id: "*", // Match any network id
			gas: 5000000,
		},
	},
	contracts_directory: "./src/contracts/",
	contracts_build_directory: "./src/abis",
	compilers: {
		solc: {
			settings: {
				optimizer: {
					enabled: true, // Default: false
					runs: 200, // Default: 200
				},
			},
			version: "^8.0.0",
		},
	},
};
