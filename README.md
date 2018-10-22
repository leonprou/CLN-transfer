# How to transfer CLN token

CLN is a standard ERC20 token, so it is transferred by calling `transfer` function on a contract. Programmatically, This is can be done using [web3](https://web3js.readthedocs.io/en/1.0/), [ethers.js](https://docs.ethers.io/ethers.js/html/) or any other library. In my example I'm using web3.

The second thing you need is an ethereum provider. Running the example in the browser you can use metamask. With nodeJS I used geth.

The code sample will send 100 CLN to my account, so don't run it mainnet unless you want to :smirk:.

## Browser

```
npm install
npm run client
```

Then open http://localhost:9080/. Press the send button and approve the transaction on MetaMask.


## NodeJS

Start a `geth` instance and unlock your account
```
geth --testnet  --rpc --rpcapi="db,eth,net,web3,personal,web3" --unlock PUT_YOUR_ACCOUNT_ADDRESS_HERE
```

Then

```
npm install
npm run server
```
