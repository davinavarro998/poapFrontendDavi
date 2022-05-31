const web3 = new Web3(ethereum);

const poapABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "_newAttendee",
          "type": "address"
        }
      ],
      "name": "AddAttendee",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "currentNumberOfAttendees",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "isAttendee",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "totalNumberOfAttendees",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "_newAttendees",
          "type": "address[]"
        }
      ],
      "name": "addAttendees",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "claimPoap",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
const poapAddress = "0x71D3499dDAc903354aC09387A8e70D48aF242eF9";

document.getElementById("contract_address").innerHTML = poapAddress;

var containers = document.getElementsByClassName("container");
var inp1 = document.getElementById("inp1");
var inp2 = document.getElementById("inp2");
var arrayOfAddresses = document.getElementsByClassName("list_element");




const connectWallet = async () => {
    if(window.ethereum){
        try{    
            let accounts = await window.ethereum.request({method:'eth_requestAccounts'});
            let account = accounts[0];
            return account;
        } catch(error){
            console.log(error);
        }
    } else{
        alert('Please install metamask');
    }
}




document.getElementById("connect_button").addEventListener("click", ()=>{
    connectWallet().then((result)=>{
        document.getElementById("connect_button").innerHTML = result.slice(0, 7) + "..." + result.slice(35, -1);
        for(let i = 0; i < containers.length; i++) {
            containers[i].style.display = "flex";
        }
        
    }).catch((error)=>{
        alert('Rinkeby?');
        console.error(error);
    });
});

const transferOwnership = async (_newOwner) => {
    if(window.ethereum){
        try{    
            let accounts = await window.ethereum.request({method:'eth_requestAccounts'});
            let account = accounts[0];
            let poapContract = new web3.eth.Contract(poapABI, poapAddress);
            let sendCall = await poapContract.methods.transferOwnership(_newOwner).send({from:account});
            return sendCall;
        } catch(error){
            console.log(error);
        }
    } else{
        alert('Please install metamask');
    }
}


document.getElementById("btn1").addEventListener("click", ()=>{
    transferOwnership(inp1.value).then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    });
});



document.getElementById("btn2").addEventListener("click", ()=>{
    document.getElementById("address_list").innerHTML += `<li class='list_element'>${inp2.value}</li>`;
    inp2.value = "";
});

document.getElementById("clear_btn").addEventListener("click", () => {
    document.getElementById("address_list").innerHTML = "";
});

const addAttendees = async (_arrayOfAddressess) => {
    if(window.ethereum){
        try{    
            let accounts = await window.ethereum.request({method:'eth_requestAccounts'});
            let account = accounts[0];
            let poapContract = new web3.eth.Contract(poapABI, poapAddress);
            let sendCall = await poapContract.methods.addAttendees(_arrayOfAddressess).send({from:account});
            return sendCall;
        } catch(error){
            console.log(error);
        }
    } else{
        alert('Please install metamask');
    }
}


document.getElementById('btn3').addEventListener('click', async ()=>{
    let myArray = [];
    for(let i=0; i< arrayOfAddresses.length; i++) {
        await myArray.push(arrayOfAddresses[i].innerHTML);
    }
    addAttendees(myArray).then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    })
});


const claimPoap = async () => {
    if(window.ethereum){
        try{    
            let accounts = await window.ethereum.request({method:'eth_requestAccounts'});
            let account = accounts[0];
            let poapContract = new web3.eth.Contract(poapABI, poapAddress);
            let sendCall = await poapContract.methods.claimPoap().send({from:account});
            return sendCall;
        } catch(error){
            console.log(error);
        }
    } else{
        alert('Please install metamask');
    }
}


document.getElementById('btn4').addEventListener('click', async ()=>{
    claimPoap().then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    });
});


const currentNumberOfAttendees = async () => {
    let poapContract = new web3.eth.Contract(poapABI, poapAddress);
    let sendCall = await poapContract.methods.currentNumberOfAttendees().call();
    return sendCall;
}

currentNumberOfAttendees().then((result)=>{
    document.getElementById('current_number').innerHTML = result;
}).catch((err)=>{
    console.error(err);
});

const totalNumberOfAttendees = async () => {
    let poapContract = new web3.eth.Contract(poapABI, poapAddress);
    let sendCall = await poapContract.methods.totalNumberOfAttendees().call();
    return sendCall;
}

totalNumberOfAttendees().then((result)=>{
    document.getElementById('total_number').innerHTML = result;
}).catch((err)=>{
    console.error(err);
});

