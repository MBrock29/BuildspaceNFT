require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

module.exports = {
  solidity: "0.8.1",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/icV293XYhdtnL32OJw8pd1fiLDzzn7T6",
      accounts: [
        "1075e5a81bad8562749e9db5e0d3ab2296000cbdeff9da6d27b50e05644f251e",
      ],
    },
  },
};
