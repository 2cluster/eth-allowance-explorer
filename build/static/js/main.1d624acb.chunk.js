(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{27:function(e){e.exports=JSON.parse('{"contract":"0x5dF43ee3333cA8f117F4329De23502Df60362F16","network":"rinkeby","networkId":"4"}')},45:function(e){e.exports=JSON.parse('{"_format":"hh-sol-artifact-1","contractName":"StableUSD","sourceName":"contracts/StableUSD.sol","abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x60806040523480156200001157600080fd5b50600080546001600160a01b031916331790556040805180820190915260098082526814dd18589b195554d160ba1b6020909201918252620000569160049162000222565b506040805180820190915260048082526314d554d160e21b6020909201918252620000849160059162000222565b506006805460ff19166002179055620000a2336305f5e100620000a8565b620002ce565b6001600160a01b03821662000104576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6200011260008383620001bb565b6200012e81600354620001c060201b620005a11790919060201c565b6003556001600160a01b03821660009081526001602090815260409091205462000163918390620005a1620001c0821b17901c565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b505050565b6000828201838110156200021b576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826200025a5760008555620002a5565b82601f106200027557805160ff1916838001178555620002a5565b82800160010185558215620002a5579182015b82811115620002a557825182559160200191906001019062000288565b50620002b3929150620002b7565b5090565b5b80821115620002b35760008155600101620002b8565b6109ff80620002de6000396000f3fe608060405234801561001057600080fd5b50600436106100a45760003560e01c806306fdde03146100a9578063095ea7b31461012657806318160ddd1461016657806323b872dd14610180578063313ce567146101b657806339509351146101d457806370a08231146102005780638da5cb5b1461022657806395d89b411461024a578063a457c2d714610252578063a9059cbb1461027e578063dd62ed3e146102aa575b600080fd5b6100b16102d8565b6040805160208082528351818301528351919283929083019185019080838360005b838110156100eb5781810151838201526020016100d3565b50505050905090810190601f1680156101185780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101526004803603604081101561013c57600080fd5b506001600160a01b03813516906020013561036e565b604080519115158252519081900360200190f35b61016e61038b565b60408051918252519081900360200190f35b6101526004803603606081101561019657600080fd5b506001600160a01b03813581169160208101359091169060400135610391565b6101be610418565b6040805160ff9092168252519081900360200190f35b610152600480360360408110156101ea57600080fd5b506001600160a01b038135169060200135610421565b61016e6004803603602081101561021657600080fd5b50356001600160a01b031661046f565b61022e61048a565b604080516001600160a01b039092168252519081900360200190f35b6100b1610499565b6101526004803603604081101561026857600080fd5b506001600160a01b0381351690602001356104fa565b6101526004803603604081101561029457600080fd5b506001600160a01b038135169060200135610562565b61016e600480360360408110156102c057600080fd5b506001600160a01b0381358116916020013516610576565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103645780601f1061033957610100808354040283529160200191610364565b820191906000526020600020905b81548152906001019060200180831161034757829003601f168201915b5050505050905090565b600061038261037b610600565b8484610604565b50600192915050565b60035490565b600061039e8484846106f0565b61040e846103aa610600565b61040985604051806060016040528060288152602001610934602891396001600160a01b038a166000908152600260205260408120906103e8610600565b6001600160a01b031681526020810191909152604001600020549190610852565b610604565b5060019392505050565b60065460ff1690565b600061038261042e610600565b84610409856002600061043f610600565b6001600160a01b03908116825260208083019390935260409182016000908120918c1681529252902054906105a1565b6001600160a01b031660009081526001602052604090205490565b6000546001600160a01b031681565b60058054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103645780601f1061033957610100808354040283529160200191610364565b6000610382610507610600565b84610409856040518060600160405280602581526020016109a56025913960026000610531610600565b6001600160a01b03908116825260208083019390935260409182016000908120918d16815292529020549190610852565b600061038261056f610600565b84846106f0565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b6000828201838110156105f9576040805162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b604482015290519081900360640190fd5b9392505050565b3390565b6001600160a01b0383166106495760405162461bcd60e51b81526004018080602001828103825260248152602001806109816024913960400191505060405180910390fd5b6001600160a01b03821661068e5760405162461bcd60e51b81526004018080602001828103825260228152602001806109126022913960400191505060405180910390fd5b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166107355760405162461bcd60e51b815260040180806020018281038252602581526020018061095c6025913960400191505060405180910390fd5b6001600160a01b03821661077a5760405162461bcd60e51b81526004018080602001828103825260238152602001806108ef6023913960400191505060405180910390fd5b6107858383836108e9565b6001600160a01b0383166000908152600160205260409020548111156107e6576040805162461bcd60e51b81526020600482015260116024820152704e6f7420656e6f75676820746f6b656e7360781b604482015290519081900360640190fd5b6001600160a01b03808416600081815260016020908152604080832080548790039055938616808352918490208054860190558351858152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a3505050565b600081848411156108e15760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156108a657818101518382015260200161088e565b50505050905090810190601f1680156108d35780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b50505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212206714ab6a1382afbb7346311fbeebd1b3712198fb74589241b13370fc6d22761664736f6c63430007050033","deployedBytecode":"0x608060405234801561001057600080fd5b50600436106100a45760003560e01c806306fdde03146100a9578063095ea7b31461012657806318160ddd1461016657806323b872dd14610180578063313ce567146101b657806339509351146101d457806370a08231146102005780638da5cb5b1461022657806395d89b411461024a578063a457c2d714610252578063a9059cbb1461027e578063dd62ed3e146102aa575b600080fd5b6100b16102d8565b6040805160208082528351818301528351919283929083019185019080838360005b838110156100eb5781810151838201526020016100d3565b50505050905090810190601f1680156101185780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101526004803603604081101561013c57600080fd5b506001600160a01b03813516906020013561036e565b604080519115158252519081900360200190f35b61016e61038b565b60408051918252519081900360200190f35b6101526004803603606081101561019657600080fd5b506001600160a01b03813581169160208101359091169060400135610391565b6101be610418565b6040805160ff9092168252519081900360200190f35b610152600480360360408110156101ea57600080fd5b506001600160a01b038135169060200135610421565b61016e6004803603602081101561021657600080fd5b50356001600160a01b031661046f565b61022e61048a565b604080516001600160a01b039092168252519081900360200190f35b6100b1610499565b6101526004803603604081101561026857600080fd5b506001600160a01b0381351690602001356104fa565b6101526004803603604081101561029457600080fd5b506001600160a01b038135169060200135610562565b61016e600480360360408110156102c057600080fd5b506001600160a01b0381358116916020013516610576565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103645780601f1061033957610100808354040283529160200191610364565b820191906000526020600020905b81548152906001019060200180831161034757829003601f168201915b5050505050905090565b600061038261037b610600565b8484610604565b50600192915050565b60035490565b600061039e8484846106f0565b61040e846103aa610600565b61040985604051806060016040528060288152602001610934602891396001600160a01b038a166000908152600260205260408120906103e8610600565b6001600160a01b031681526020810191909152604001600020549190610852565b610604565b5060019392505050565b60065460ff1690565b600061038261042e610600565b84610409856002600061043f610600565b6001600160a01b03908116825260208083019390935260409182016000908120918c1681529252902054906105a1565b6001600160a01b031660009081526001602052604090205490565b6000546001600160a01b031681565b60058054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156103645780601f1061033957610100808354040283529160200191610364565b6000610382610507610600565b84610409856040518060600160405280602581526020016109a56025913960026000610531610600565b6001600160a01b03908116825260208083019390935260409182016000908120918d16815292529020549190610852565b600061038261056f610600565b84846106f0565b6001600160a01b03918216600090815260026020908152604080832093909416825291909152205490565b6000828201838110156105f9576040805162461bcd60e51b815260206004820152601b60248201527a536166654d6174683a206164646974696f6e206f766572666c6f7760281b604482015290519081900360640190fd5b9392505050565b3390565b6001600160a01b0383166106495760405162461bcd60e51b81526004018080602001828103825260248152602001806109816024913960400191505060405180910390fd5b6001600160a01b03821661068e5760405162461bcd60e51b81526004018080602001828103825260228152602001806109126022913960400191505060405180910390fd5b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166107355760405162461bcd60e51b815260040180806020018281038252602581526020018061095c6025913960400191505060405180910390fd5b6001600160a01b03821661077a5760405162461bcd60e51b81526004018080602001828103825260238152602001806108ef6023913960400191505060405180910390fd5b6107858383836108e9565b6001600160a01b0383166000908152600160205260409020548111156107e6576040805162461bcd60e51b81526020600482015260116024820152704e6f7420656e6f75676820746f6b656e7360781b604482015290519081900360640190fd5b6001600160a01b03808416600081815260016020908152604080832080548790039055938616808352918490208054860190558351858152935191937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef929081900390910190a3505050565b600081848411156108e15760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156108a657818101518382015260200161088e565b50505050905090810190601f1680156108d35780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b50505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa26469706673582212206714ab6a1382afbb7346311fbeebd1b3712198fb74589241b13370fc6d22761664736f6c63430007050033","linkReferences":{},"deployedLinkReferences":{}}')},46:function(e){e.exports=JSON.parse('{"accounts":{"0x559BC07434C89c5496d790DFD2885dC966F9113a":"controller","0x54806DD512b21814aa560D627432a75720ed6bB3":"lender","0x6dC89393FA30b64c56DEFF31dAAcf10cEdcD852D":"borrower"}}')},53:function(e,t,a){e.exports=a(76)},59:function(e,t){},66:function(e,t){},76:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a.n(n),s=a(44),c=a.n(s),o=a(2),l=a.n(o),i=a(29),d=a(18),b=a(4),u=a(5),m=a(7),f=a(6),p=a(32),h=a(45),v=a(27),E=a(46);function y(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("div",{className:"col-6 p-4 text-center"},r.a.createElement("p",null,"No Ethereum wallet was detected. ",r.a.createElement("br",null),"Please install"," ",r.a.createElement("a",{href:"http://metamask.io",target:"_blank",rel:"noopener noreferrer"},"MetaMask"),"."))))}function w(e){var t=e.message,a=e.dismiss;return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},t,r.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",onClick:a},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))}function k(e){var t=e.connectWallet,a=e.networkError,n=e.dismiss;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("div",{className:"col-12 text-center"},a&&r.a.createElement(w,{message:a,dismiss:n})),r.a.createElement("div",{className:"col-6 p-4 text-center"},r.a.createElement("p",null,"Please connect to your wallet."),r.a.createElement("button",{className:"btn btn-warning",type:"button",onClick:t},"Connect Wallet"))))}function x(){return r.a.createElement("div",{style:{position:"fixed",zIndex:2,top:0,left:0,width:"100%",height:"100%",background:"rgba(255, 255, 255, 0.5)"}},r.a.createElement("div",{style:{position:"absolute",zIndex:3,top:"50%",left:"50%",width:"100px",height:"50px",marginLeft:"-50px",marginTop:" -25px",textAlign:"center"}},r.a.createElement("div",{className:"spinner-border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))))}function g(e){var t=e.transferTokens,a=e.tokenSymbol,n=e.accounts;return r.a.createElement("div",null,r.a.createElement("h4",null,"Transfer"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=new FormData(e.target),n=a.get("to"),r=a.get("amount");n&&r&&t(n,r)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Amount of ",a),r.a.createElement("input",{className:"form-control",type:"number",step:"1",name:"amount",placeholder:"1",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Recipient"),r.a.createElement("select",{name:"to",className:"form-control"},r.a.createElement("option",{name:"to",value:n.lender},"lender"),r.a.createElement("option",{name:"to",value:n.borrower},"borrower"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"Transfer"}))))}function N(e){var t=e.transferFromTokens,a=e.tokenSymbol,n=e.accounts;return r.a.createElement("div",null,r.a.createElement("h4",null,"TransferFrom"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=new FormData(e.target),n=a.get("from"),r=a.get("to"),s=a.get("amount");n&&r&&s&&t(n,r,s)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Amount of ",a),r.a.createElement("input",{className:"form-control",type:"number",step:"1",name:"amount",placeholder:"1",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Sender"),r.a.createElement("select",{name:"from",className:"form-control"},r.a.createElement("option",{name:"from",value:n.borrower},"borrower"),r.a.createElement("option",{name:"from",value:n.lender},"lender"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Recipient"),r.a.createElement("select",{name:"to",className:"form-control"},r.a.createElement("option",{name:"to",value:n.borrower},"borrower"),r.a.createElement("option",{name:"to",value:n.lender},"lender"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"Transfer"}))))}function _(e){var t=e.approve;return r.a.createElement("div",null,r.a.createElement("h4",null,"Approve"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=new FormData(e.target).get("amount");a&&t(a)}},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Amount"),r.a.createElement("input",{className:"form-control",type:"number",step:"1",name:"amount",placeholder:"1",required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"btn btn-primary",type:"submit",value:"approve"}))))}function S(e){var t=e.message,a=e.dismiss;return r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"Error sending transaction: ",t.substring(0,100),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-label":"Close",onClick:a},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))}function D(e){var t=e.txHash;return r.a.createElement("div",{className:"alert alert-info",role:"alert"},"Waiting for transaction ",r.a.createElement("strong",null,t)," to be mined")}function T(e){e.selectedAddress;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"You don't have tokens to transfer"))}function A(e){var t=e.tokenData;return r.a.createElement("div",{style:{background:"rgba(255, 255, 2, 1)",width:"100%"}},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Contract Info"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-2"},r.a.createElement("p",null,"token:"),r.a.createElement("p",null,"symbol:"),r.a.createElement("p",null,"address:"),r.a.createElement("p",null,"totalSupply:")),r.a.createElement("div",{className:"col-10"},r.a.createElement("p",null,r.a.createElement("b",null,t.name)),r.a.createElement("p",null,r.a.createElement("b",null,t.symbol)),r.a.createElement("p",null,r.a.createElement("b",null,t.address)),r.a.createElement("p",null,r.a.createElement("b",null,"$ ",(Math.round(t.total*Math.pow(t.decimals,10))/Math.pow(t.decimals,10)).toFixed(t.decimals).toString()))))))}var M=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(b.a)(this,a),(n=t.call(this,e)).initialState={tokenData:void 0,total:void 0,selectedAddress:void 0,selectedName:void 0,balance:void 0,allowance:void 0,txBeingSent:void 0,transactionError:void 0,networkError:void 0,accountError:void 0},n.state=n.initialState,n}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return void 0===window.ethereum?r.a.createElement(y,null):this.state.networkError?r.a.createElement(k,{connectWallet:function(){return e._connectWallet()},networkError:this.state.networkError,dismiss:function(){return e._dismissNetworkError()}}):this.state.accountError||void 0===this.state.accounts||this.state.selectedAddress!==this.state.accounts.controller.toLowerCase()&&this.state.selectedAddress!==this.state.accounts.lender.toLowerCase()&&this.state.selectedAddress!==this.state.accounts.borrower.toLowerCase()?r.a.createElement(k,{connectWallet:function(){return e._connectWallet()},networkError:this.state.accountError,dismiss:function(){return e._dismissAccountError()}}):this.state.tokenData&&this.state.accounts?(console.log(this.state),"controller"===this.state.selectedName?r.a.createElement("div",{className:""},r.a.createElement("div",{className:"row"},r.a.createElement(A,{tokenData:this.state.tokenData})),r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Controller's Account"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 p-3 card"},r.a.createElement("h2",null,"Lender"),r.a.createElement("p",null,"Balance:  ",r.a.createElement("b",null,"$ ",(Math.round(this.state.p1balance*Math.pow(this.state.tokenData.decimals,10))/Math.pow(this.state.tokenData.decimals,10)).toFixed(this.state.tokenData.decimals).toString())),r.a.createElement("p",null,"Allowed:  ",r.a.createElement("b",null,"$ ",(Math.round(this.state.p1allowance*Math.pow(this.state.tokenData.decimals,10))/Math.pow(this.state.tokenData.decimals,10)).toFixed(this.state.tokenData.decimals).toString()))),r.a.createElement("div",{className:"col-6 p-3 card"},r.a.createElement("h2",null,"Borrower"),r.a.createElement("p",null,"Balance:  ",r.a.createElement("b",null,"$ ",(Math.round(this.state.p2balance*Math.pow(this.state.tokenData.decimals,10))/Math.pow(this.state.tokenData.decimals,10)).toFixed(this.state.tokenData.decimals).toString())),r.a.createElement("p",null,"Allowed:  ",r.a.createElement("b",null,"$ ",(Math.round(this.state.p2allowance*Math.pow(this.state.tokenData.decimals,10))/Math.pow(this.state.tokenData.decimals,10)).toFixed(this.state.tokenData.decimals).toString())))),r.a.createElement("div",null,this.state.txBeingSent&&r.a.createElement(D,{txHash:this.state.txBeingSent}),this.state.transactionError&&r.a.createElement(S,{message:this._getRpcErrorMessage(this.state.transactionError),dismiss:function(){return e._dismissTransactionError()}})),r.a.createElement("div",{className:"row mt-10"},r.a.createElement("div",{className:"col-6 card"},this.state.balance.eq(0)&&r.a.createElement(T,{selectedAddress:this.state.selectedAddress}),this.state.balance.gt(0)&&r.a.createElement(g,{transferTokens:function(t,a){return e._transferTokens(t,a)},tokenSymbol:this.state.tokenData.symbol,accounts:this.state.accounts})),r.a.createElement("div",{className:"col-6 card"},this.state.balance.eq(0)&&r.a.createElement(T,{selectedAddress:this.state.selectedAddress}),this.state.balance.gt(0)&&r.a.createElement(N,{transferFromTokens:function(t,a,n){return e._transferFromTokens(t,a,n)},tokenSymbol:this.state.tokenData.symbol,accounts:this.state.accounts}))))):"lender"===this.state.selectedName||"borrower"===this.state.selectedName?r.a.createElement("div",{className:""},r.a.createElement("div",{className:"row"},r.a.createElement(A,{tokenData:this.state.tokenData})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h1",null,this.state.selectedName)),r.a.createElement("div",{className:"row card"},r.a.createElement("div",{className:"col-3"},r.a.createElement("p",null,"Balance:"),r.a.createElement("p",null,"Approved amount:")),r.a.createElement("div",{className:"col-3"},r.a.createElement("p",null,r.a.createElement("b",null,"$ ",(Math.round(this.state.balance*Math.pow(this.state.tokenData.decimals,10))/Math.pow(this.state.tokenData.decimals,10)).toFixed(this.state.tokenData.decimals).toString())),r.a.createElement("p",null,r.a.createElement("b",null,"$ ",(Math.round(this.state.allowance*Math.pow(this.state.tokenData.decimals,10))/Math.pow(this.state.tokenData.decimals,10)).toFixed(this.state.tokenData.decimals).toString())))),r.a.createElement("div",null,this.state.txBeingSent&&r.a.createElement(D,{txHash:this.state.txBeingSent}),this.state.transactionError&&r.a.createElement(S,{message:this._getRpcErrorMessage(this.state.transactionError),dismiss:function(){return e._dismissTransactionError()}})),r.a.createElement("div",{className:"row card"},r.a.createElement("div",{className:"col-4"},this.state.balance.eq(0)&&r.a.createElement(T,{selectedAddress:this.state.selectedAddress}),this.state.balance.gt(0)&&r.a.createElement(_,{approve:function(t){return e._setAllowance(t)},tokenSymbol:this.state.tokenData.symbol})),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4"},this.state.balance.eq(0)))))):void 0):r.a.createElement(x,null)}},{key:"componentWillUnmount",value:function(){this._stopPollingData()}},{key:"_connectWallet",value:function(){var e=Object(d.a)(l.a.mark((function e(){var t,a,n,r=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.enable();case 2:if(t=e.sent,a=Object(i.a)(t,1),n=a[0],this._checkNetwork()){e.next=7;break}return e.abrupt("return");case 7:this._initialize(n),window.ethereum.on("accountsChanged",(function(e){var t=Object(i.a)(e,1)[0];r._stopPollingData(),r._resetState(),r._initialize(t)})),window.ethereum.on("networkChanged",(function(e){Object(i.a)(e,1)[0];r._stopPollingData(),r._resetState()}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_initialize",value:function(){var e=Object(d.a)(l.a.mark((function e(t){var a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=E.accounts,n={},r=void 0,e.next=5,Object.keys(a).forEach((function(e){t.toLowerCase()===e.toLowerCase()?(r=a[e],n[a[e]]=e):n[a[e]]=e}));case 5:return e.next=7,this.setState({accounts:n,selectedName:r,selectedAddress:t});case 7:if(void 0!==r){e.next=10;break}return this.setState({accountError:"Please use one of the first 5 accounts provided by the mnemonic in .env "}),e.abrupt("return",!1);case 10:return this._intializeEthers(),this._getTokenData(),this._startPollingData(),e.abrupt("return",!0);case 14:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_intializeEthers",value:function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this._provider=new p.a.providers.Web3Provider(window.ethereum),this._token=new p.a.Contract(v.contract,h.abi,this._provider.getSigner(0));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_startPollingData",value:function(){var e=this;this._pollDataInterval=setInterval((function(){return e._updateAccount()}),1e3),this._updateAccount()}},{key:"_stopPollingData",value:function(){clearInterval(this._pollDataInterval),this._pollDataInterval=void 0}},{key:"_getTokenData",value:function(){var e=Object(d.a)(l.a.mark((function e(){var t,a,n,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._token.name();case 2:return t=e.sent,e.next=5,this._token.symbol();case 5:return a=e.sent,e.next=8,this._token.decimals();case 8:return n=e.sent,e.next=11,this._token.totalSupply();case 11:return r=e.sent,e.next=14,this._token.address;case 14:s=e.sent,this.setState({tokenData:{name:t,symbol:a,decimals:n,total:r,address:s}});case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_updateAccount",value:function(){var e=Object(d.a)(l.a.mark((function e(){var t,a,n,r,s,c,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.selectedAddress===this.state.accounts.controller.toLowerCase()){e.next=11;break}return e.next=3,this._token.balanceOf(this.state.selectedAddress);case 3:return t=e.sent,e.next=6,this._token.allowance(this.state.selectedAddress,this.state.accounts.controller);case 6:return a=e.sent,e.next=9,this.setState({balance:t,allowance:a});case 9:e.next=32;break;case 11:return e.next=13,this._token.balanceOf(this.state.selectedAddress);case 13:return n=e.sent,e.next=16,this.setState({balance:n});case 16:return e.next=18,this._token.balanceOf(this.state.accounts.lender);case 18:return r=e.sent,e.next=21,this._token.allowance(this.state.accounts.lender,this.state.accounts.controller);case 21:return s=e.sent,e.next=24,this.setState({p1balance:r,p1allowance:s});case 24:return e.next=26,this._token.balanceOf(this.state.accounts.borrower);case 26:return c=e.sent,e.next=29,this._token.allowance(this.state.accounts.borrower,this.state.accounts.controller);case 29:return o=e.sent,e.next=32,this.setState({p2balance:c,p2allowance:o});case 32:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_transferTokens",value:function(){var e=Object(d.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this._dismissTransactionError(),e.next=4,this._token.transfer(t,a);case 4:return n=e.sent,this.setState({txBeingSent:n.hash}),e.next=8,n.wait();case 8:if(0!==e.sent.status){e.next=11;break}throw new Error("Transaction failed");case 11:return e.next=13,this._updateAccount();case 13:e.next=21;break;case 15:if(e.prev=15,e.t0=e.catch(0),4001!==e.t0.code){e.next=19;break}return e.abrupt("return");case 19:console.error(e.t0),this.setState({transactionError:e.t0});case 21:return e.prev=21,this.setState({txBeingSent:void 0}),e.finish(21);case 24:case"end":return e.stop()}}),e,this,[[0,15,21,24]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"_transferFromTokens",value:function(){var e=Object(d.a)(l.a.mark((function e(t,a,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this._dismissTransactionError(),e.next=4,this._token.transferFrom(t,a,n);case 4:return r=e.sent,this.setState({txBeingSent:r.hash}),e.next=8,r.wait();case 8:if(0!==e.sent.status){e.next=11;break}throw new Error("Transaction failed");case 11:return e.next=13,this._updateAccount();case 13:e.next=20;break;case 15:if(e.prev=15,e.t0=e.catch(0),4001!==e.t0.code){e.next=19;break}return e.abrupt("return");case 19:this.setState({transactionError:e.t0});case 20:return e.prev=20,this.setState({txBeingSent:void 0}),e.finish(20);case 23:case"end":return e.stop()}}),e,this,[[0,15,20,23]])})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"_setAllowance",value:function(){var e=Object(d.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this._dismissTransactionError(),e.next=4,this._token.approve(this.state.accounts.controller,t);case 4:return a=e.sent,this.setState({txBeingSent:a.hash}),e.next=8,a.wait();case 8:if(0!==e.sent.status){e.next=11;break}throw new Error("Transaction failed");case 11:return e.next=13,this._updateAccount();case 13:e.next=21;break;case 15:if(e.prev=15,e.t0=e.catch(0),4001!==e.t0.code){e.next=19;break}return e.abrupt("return");case 19:console.error(e.t0),this.setState({transactionError:e.t0});case 21:return e.prev=21,this.setState({txBeingSent:void 0}),e.finish(21);case 24:case"end":return e.stop()}}),e,this,[[0,15,21,24]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_dismissTransactionError",value:function(){this.setState({transactionError:void 0})}},{key:"_dismissNetworkError",value:function(){this.setState({networkError:void 0})}},{key:"_dismissAccountError",value:function(){this.setState({accountError:void 0})}},{key:"_getRpcErrorMessage",value:function(e){return e.error.message}},{key:"_resetState",value:function(){this.setState(this.initialState)}},{key:"_checkNetwork",value:function(){var e=v.network;return window.ethereum.networkVersion===v.networkId||(this.setState({networkError:"Please connect Metamask to network: ".concat(e)}),!1)}},{key:"_checkAccounts",value:function(){return void 0!==this.state.accounts&&(this.state.selectedAddress===this.state.accounts.controller.toLowerCase()||this.state.selectedAddress===this.state.accounts.lender.toLowerCase()||this.state.selectedAddress===this.state.accounts.borrower.toLowerCase())||(this.setState({accountError:"Please use one of the first accounts provided by the mnemonic in .env "}),!1)}}]),a}(r.a.Component);a(75);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.1d624acb.chunk.js.map