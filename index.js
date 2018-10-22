
function getWeb3 () {
  // for browser
  if (typeof web3 !== 'undefined') {
    return new window.Web3(window.web3.currentProvider)
  } else {
    // Set the provider you want from Web3.providers
    const Web3 = require('web3')
    return new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
  }
}

function getAbi () {
  // for browser
  if (typeof abi !== 'undefined') {
    return window.abi
  } else {
    return require('./abi.js')
  }
}

function transferERC20 () {
  const web3 = getWeb3()
  const contractAbi = getAbi()
  const contractAddress = '0x41C9d91E96b933b74ae21bCBb617369CBE022530'
  const tokenContract = new web3.eth.Contract(contractAbi, contractAddress)

  const toAddress = '0xD418c5d0c4a3D87a6c555B7aA41f13EF87485Ec6'

  const ammountOfCLN = 100

  // wei is the basis divisibility unit, 1e18 wei of CLN = 1 CLN.
  const ammountOfCLNInWei = web3.utils.toBN(ammountOfCLN).mul(web3.utils.toBN(1e18))

  web3.eth.getAccounts().then(function (accounts) {
    // I'm assuming that the first account is unlocked by geth/metamask
    // For geth, if you're not unlocking the first one, just change the index.
    const account = accounts[0]
    tokenContract.methods.transfer(toAddress, ammountOfCLNInWei.toString()).send({
      from: account
    })
  })
}

if (typeof window === 'undefined') {
  transferERC20()
}
