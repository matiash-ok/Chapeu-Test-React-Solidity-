export const HATCONTRACT:any  = 
{
  "contractName": "Hats",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "color",
          "type": "string"
        }
      ],
      "name": "HatCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bool",
          "name": "win",
          "type": "bool"
        }
      ],
      "name": "StartLottery",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "hats",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "color",
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
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "hatsCount",
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
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_color",
          "type": "string"
        }
      ],
      "name": "createHat",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "int256",
          "name": "_position",
          "type": "int256"
        },
        {
          "internalType": "string",
          "name": "_color",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "startLottery",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.3+commit.8d00100c\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"color\",\"type\":\"string\"}],\"name\":\"HatCreated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"win\",\"type\":\"bool\"}],\"name\":\"StartLottery\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_color\",\"type\":\"string\"}],\"name\":\"createHat\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"hats\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"color\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"hatsCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"int256\",\"name\":\"_position\",\"type\":\"int256\"},{\"internalType\":\"string\",\"name\":\"_color\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"}],\"name\":\"startLottery\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/Hats.sol\":\"Hats\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/Hats.sol\":{\"keccak256\":\"0xad01a16ed264ca9c1593b883a256333297ba130eeeb053f150d76426411a787d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://88d95fcf5f365657b0f1e836124eae14d9b84cb1fe06e051c37d65a89381fa8d\",\"dweb:/ipfs/QmcdqrRzJah7oJuVFhBDCrBddvr1vGn9cQw6UoeJh63BGr\"]}},\"version\":1}",
  "bytecode": "0x60806040526000805534801561001457600080fd5b50610c08806100246000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806302fa0bf414610051578063658445be14610081578063ab26c91b1461009d578063c22cecab146100cf575b600080fd5b61006b60048036038101906100669190610615565b6100ff565b6040516100789190610842565b60405180910390f35b61009b600480360381019061009691906106f9565b610117565b005b6100b760048036038101906100b2919061063e565b6102a2565b6040516100c69392919061085d565b60405180910390f35b6100e960048036038101906100e4919061067a565b6103e9565b6040516100f69190610827565b60405180910390f35b60026020528060005260406000206000915090505481565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050604051806060016040528082815260200184815260200183815250600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206000820151816000015560208201518160010190805190602001906101ec9291906104cb565b5060408201518160020190805190602001906102099291906104cb565b509050507f8d5cac06a5aba881f89ed427d7dfdabf4406b13c836e2d4cd2a88973c00da8658184846040516102409392919061085d565b60405180910390a1600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081548092919061029890610a0b565b9190505550505050565b6001602052816000526040600020602052806000526040600020600091509150508060000154908060010180546102d8906109a8565b80601f0160208091040260200160405190810160405280929190818152602001828054610304906109a8565b80156103515780601f1061032657610100808354040283529160200191610351565b820191906000526020600020905b81548152906001019060200180831161033457829003601f168201915b505050505090806002018054610366906109a8565b80601f0160208091040260200160405190810160405280929190818152602001828054610392906109a8565b80156103df5780601f106103b4576101008083540402835291602001916103df565b820191906000526020600020905b8154815290600101906020018083116103c257829003601f168201915b5050505050905083565b6000806000905060008081548092919061040290610a0b565b919050555060008060644233600054604051602001610423939291906107ea565b6040516020818303038152906040528051906020012060001c6104469190610a82565b90506042811061045557600391505b602181101561046357600191505b6042811061047057600391505b81871415610487576104828587610117565b600192505b7f164dd4218d08882e136889b231037f9076dd00baca72fca68acdda59c28c9fae836040516104b69190610827565b60405180910390a18293505050509392505050565b8280546104d7906109a8565b90600052602060002090601f0160209004810192826104f95760008555610540565b82601f1061051257805160ff1916838001178555610540565b82800160010185558215610540579182015b8281111561053f578251825591602001919060010190610524565b5b50905061054d9190610551565b5090565b5b8082111561056a576000816000905550600101610552565b5090565b600061058161057c846108c7565b6108a2565b90508281526020810184848401111561059957600080fd5b6105a4848285610966565b509392505050565b6000813590506105bb81610b8d565b92915050565b6000813590506105d081610ba4565b92915050565b600082601f8301126105e757600080fd5b81356105f784826020860161056e565b91505092915050565b60008135905061060f81610bbb565b92915050565b60006020828403121561062757600080fd5b6000610635848285016105ac565b91505092915050565b6000806040838503121561065157600080fd5b600061065f858286016105ac565b925050602061067085828601610600565b9150509250929050565b60008060006060848603121561068f57600080fd5b600061069d868287016105c1565b935050602084013567ffffffffffffffff8111156106ba57600080fd5b6106c6868287016105d6565b925050604084013567ffffffffffffffff8111156106e357600080fd5b6106ef868287016105d6565b9150509250925092565b6000806040838503121561070c57600080fd5b600083013567ffffffffffffffff81111561072657600080fd5b610732858286016105d6565b925050602083013567ffffffffffffffff81111561074f57600080fd5b61075b858286016105d6565b9150509250929050565b61077661077182610914565b610a54565b82525050565b61078581610926565b82525050565b6000610796826108f8565b6107a08185610903565b93506107b0818560208601610975565b6107b981610b6f565b840191505092915050565b6107cd8161095c565b82525050565b6107e46107df8261095c565b610a78565b82525050565b60006107f682866107d3565b6020820191506108068285610765565b60148201915061081682846107d3565b602082019150819050949350505050565b600060208201905061083c600083018461077c565b92915050565b600060208201905061085760008301846107c4565b92915050565b600060608201905061087260008301866107c4565b8181036020830152610884818561078b565b90508181036040830152610898818461078b565b9050949350505050565b60006108ac6108bd565b90506108b882826109da565b919050565b6000604051905090565b600067ffffffffffffffff8211156108e2576108e1610b40565b5b6108eb82610b6f565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600061091f8261093c565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610993578082015181840152602081019050610978565b838111156109a2576000848401525b50505050565b600060028204905060018216806109c057607f821691505b602082108114156109d4576109d3610b11565b5b50919050565b6109e382610b6f565b810181811067ffffffffffffffff82111715610a0257610a01610b40565b5b80604052505050565b6000610a168261095c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610a4957610a48610ab3565b5b600182019050919050565b6000610a5f82610a66565b9050919050565b6000610a7182610b80565b9050919050565b6000819050919050565b6000610a8d8261095c565b9150610a988361095c565b925082610aa857610aa7610ae2565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b60008160601b9050919050565b610b9681610914565b8114610ba157600080fd5b50565b610bad81610932565b8114610bb857600080fd5b50565b610bc48161095c565b8114610bcf57600080fd5b5056fea26469706673582212208b070a9f82fd60d214d3e1289fc0eb68ed9645f78d06a055b0028e45d6406b6f64736f6c63430008030033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061004c5760003560e01c806302fa0bf414610051578063658445be14610081578063ab26c91b1461009d578063c22cecab146100cf575b600080fd5b61006b60048036038101906100669190610615565b6100ff565b6040516100789190610842565b60405180910390f35b61009b600480360381019061009691906106f9565b610117565b005b6100b760048036038101906100b2919061063e565b6102a2565b6040516100c69392919061085d565b60405180910390f35b6100e960048036038101906100e4919061067a565b6103e9565b6040516100f69190610827565b60405180910390f35b60026020528060005260406000206000915090505481565b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050604051806060016040528082815260200184815260200183815250600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206000820151816000015560208201518160010190805190602001906101ec9291906104cb565b5060408201518160020190805190602001906102099291906104cb565b509050507f8d5cac06a5aba881f89ed427d7dfdabf4406b13c836e2d4cd2a88973c00da8658184846040516102409392919061085d565b60405180910390a1600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600081548092919061029890610a0b565b9190505550505050565b6001602052816000526040600020602052806000526040600020600091509150508060000154908060010180546102d8906109a8565b80601f0160208091040260200160405190810160405280929190818152602001828054610304906109a8565b80156103515780601f1061032657610100808354040283529160200191610351565b820191906000526020600020905b81548152906001019060200180831161033457829003601f168201915b505050505090806002018054610366906109a8565b80601f0160208091040260200160405190810160405280929190818152602001828054610392906109a8565b80156103df5780601f106103b4576101008083540402835291602001916103df565b820191906000526020600020905b8154815290600101906020018083116103c257829003601f168201915b5050505050905083565b6000806000905060008081548092919061040290610a0b565b919050555060008060644233600054604051602001610423939291906107ea565b6040516020818303038152906040528051906020012060001c6104469190610a82565b90506042811061045557600391505b602181101561046357600191505b6042811061047057600391505b81871415610487576104828587610117565b600192505b7f164dd4218d08882e136889b231037f9076dd00baca72fca68acdda59c28c9fae836040516104b69190610827565b60405180910390a18293505050509392505050565b8280546104d7906109a8565b90600052602060002090601f0160209004810192826104f95760008555610540565b82601f1061051257805160ff1916838001178555610540565b82800160010185558215610540579182015b8281111561053f578251825591602001919060010190610524565b5b50905061054d9190610551565b5090565b5b8082111561056a576000816000905550600101610552565b5090565b600061058161057c846108c7565b6108a2565b90508281526020810184848401111561059957600080fd5b6105a4848285610966565b509392505050565b6000813590506105bb81610b8d565b92915050565b6000813590506105d081610ba4565b92915050565b600082601f8301126105e757600080fd5b81356105f784826020860161056e565b91505092915050565b60008135905061060f81610bbb565b92915050565b60006020828403121561062757600080fd5b6000610635848285016105ac565b91505092915050565b6000806040838503121561065157600080fd5b600061065f858286016105ac565b925050602061067085828601610600565b9150509250929050565b60008060006060848603121561068f57600080fd5b600061069d868287016105c1565b935050602084013567ffffffffffffffff8111156106ba57600080fd5b6106c6868287016105d6565b925050604084013567ffffffffffffffff8111156106e357600080fd5b6106ef868287016105d6565b9150509250925092565b6000806040838503121561070c57600080fd5b600083013567ffffffffffffffff81111561072657600080fd5b610732858286016105d6565b925050602083013567ffffffffffffffff81111561074f57600080fd5b61075b858286016105d6565b9150509250929050565b61077661077182610914565b610a54565b82525050565b61078581610926565b82525050565b6000610796826108f8565b6107a08185610903565b93506107b0818560208601610975565b6107b981610b6f565b840191505092915050565b6107cd8161095c565b82525050565b6107e46107df8261095c565b610a78565b82525050565b60006107f682866107d3565b6020820191506108068285610765565b60148201915061081682846107d3565b602082019150819050949350505050565b600060208201905061083c600083018461077c565b92915050565b600060208201905061085760008301846107c4565b92915050565b600060608201905061087260008301866107c4565b8181036020830152610884818561078b565b90508181036040830152610898818461078b565b9050949350505050565b60006108ac6108bd565b90506108b882826109da565b919050565b6000604051905090565b600067ffffffffffffffff8211156108e2576108e1610b40565b5b6108eb82610b6f565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600061091f8261093c565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610993578082015181840152602081019050610978565b838111156109a2576000848401525b50505050565b600060028204905060018216806109c057607f821691505b602082108114156109d4576109d3610b11565b5b50919050565b6109e382610b6f565b810181811067ffffffffffffffff82111715610a0257610a01610b40565b5b80604052505050565b6000610a168261095c565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610a4957610a48610ab3565b5b600182019050919050565b6000610a5f82610a66565b9050919050565b6000610a7182610b80565b9050919050565b6000819050919050565b6000610a8d8261095c565b9150610a988361095c565b925082610aa857610aa7610ae2565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b60008160601b9050919050565b610b9681610914565b8114610ba157600080fd5b50565b610bad81610932565b8114610bb857600080fd5b50565b610bc48161095c565b8114610bcf57600080fd5b5056fea26469706673582212208b070a9f82fd60d214d3e1289fc0eb68ed9645f78d06a055b0028e45d6406b6f64736f6c63430008030033",
  "immutableReferences": {},
  "generatedSources": [],
  "deployedGeneratedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:10173:2",
        "statements": [
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "91:261:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "101:75:2",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "168:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "array_allocation_size_t_string_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "126:41:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "126:49:2"
                      }
                    ],
                    "functionName": {
                      "name": "allocate_memory",
                      "nodeType": "YulIdentifier",
                      "src": "110:15:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "110:66:2"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "101:5:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "192:5:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "199:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "185:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "185:21:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "185:21:2"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "215:27:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "230:5:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "237:4:2",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "226:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "226:16:2"
                  },
                  "variables": [
                    {
                      "name": "dst",
                      "nodeType": "YulTypedName",
                      "src": "219:3:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "280:16:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "289:1:2",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "292:1:2",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "282:6:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "282:12:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "282:12:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "src",
                            "nodeType": "YulIdentifier",
                            "src": "261:3:2"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "266:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "257:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "257:16:2"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "275:3:2"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "254:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "254:25:2"
                  },
                  "nodeType": "YulIf",
                  "src": "251:2:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "src",
                        "nodeType": "YulIdentifier",
                        "src": "329:3:2"
                      },
                      {
                        "name": "dst",
                        "nodeType": "YulIdentifier",
                        "src": "334:3:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "339:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "copy_calldata_to_memory",
                      "nodeType": "YulIdentifier",
                      "src": "305:23:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "305:41:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "305:41:2"
                }
              ]
            },
            "name": "abi_decode_available_length_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "64:3:2",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "69:6:2",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "77:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "85:5:2",
                "type": ""
              }
            ],
            "src": "7:345:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "410:87:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "420:29:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "442:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "429:12:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "429:20:2"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "420:5:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "485:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_address",
                      "nodeType": "YulIdentifier",
                      "src": "458:26:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "458:33:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "458:33:2"
                }
              ]
            },
            "name": "abi_decode_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "388:6:2",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "396:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "404:5:2",
                "type": ""
              }
            ],
            "src": "358:139:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "554:86:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "564:29:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "586:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "573:12:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "573:20:2"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "564:5:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "628:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_int256",
                      "nodeType": "YulIdentifier",
                      "src": "602:25:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "602:32:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "602:32:2"
                }
              ]
            },
            "name": "abi_decode_t_int256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "532:6:2",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "540:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "548:5:2",
                "type": ""
              }
            ],
            "src": "503:137:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "722:211:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "771:16:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "780:1:2",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "783:1:2",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "773:6:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "773:12:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "773:12:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "750:6:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "758:4:2",
                                "type": "",
                                "value": "0x1f"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "746:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "746:17:2"
                          },
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "765:3:2"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "742:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "742:27:2"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "735:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "735:35:2"
                  },
                  "nodeType": "YulIf",
                  "src": "732:2:2"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "796:34:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "823:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "810:12:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "810:20:2"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "800:6:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "839:88:2",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "900:6:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "908:4:2",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "896:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "896:17:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "915:6:2"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "923:3:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_available_length_t_string_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "848:47:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "848:79:2"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "839:5:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "700:6:2",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "708:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "716:5:2",
                "type": ""
              }
            ],
            "src": "660:273:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "991:87:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1001:29:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "1023:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "1010:12:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1010:20:2"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "1001:5:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1066:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "1039:26:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1039:33:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1039:33:2"
                }
              ]
            },
            "name": "abi_decode_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "969:6:2",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "977:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "985:5:2",
                "type": ""
              }
            ],
            "src": "939:139:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1150:196:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1196:16:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1205:1:2",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1208:1:2",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1198:6:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1198:12:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1198:12:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1171:7:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1180:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1167:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1167:23:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1192:2:2",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "1163:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1163:32:2"
                  },
                  "nodeType": "YulIf",
                  "src": "1160:2:2"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "1222:117:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "1237:15:2",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1251:1:2",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "1241:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1266:63:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1301:9:2"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "1312:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1297:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1297:22:2"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1321:7:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "1276:20:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1276:53:2"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "1266:6:2"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1120:9:2",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1131:7:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1143:6:2",
                "type": ""
              }
            ],
            "src": "1084:262:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1435:324:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1481:16:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1490:1:2",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1493:1:2",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1483:6:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1483:12:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1483:12:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1456:7:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1465:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1452:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1452:23:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1477:2:2",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "1448:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1448:32:2"
                  },
                  "nodeType": "YulIf",
                  "src": "1445:2:2"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "1507:117:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "1522:15:2",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1536:1:2",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "1526:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1551:63:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1586:9:2"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "1597:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1582:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1582:22:2"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1606:7:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "1561:20:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1561:53:2"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "1551:6:2"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "1634:118:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "1649:16:2",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1663:2:2",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "1653:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1679:63:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1714:9:2"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "1725:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1710:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1710:22:2"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1734:7:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "1689:20:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1689:53:2"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "1679:6:2"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1397:9:2",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1408:7:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1420:6:2",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "1428:6:2",
                "type": ""
              }
            ],
            "src": "1352:407:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1884:657:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1930:16:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1939:1:2",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1942:1:2",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1932:6:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1932:12:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1932:12:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1905:7:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1914:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "1901:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1901:23:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1926:2:2",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "1897:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1897:32:2"
                  },
                  "nodeType": "YulIf",
                  "src": "1894:2:2"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "1956:116:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "1971:15:2",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1985:1:2",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "1975:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "2000:62:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "2034:9:2"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "2045:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2030:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2030:22:2"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2054:7:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_int256",
                          "nodeType": "YulIdentifier",
                          "src": "2010:19:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2010:52:2"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "2000:6:2"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "2082:221:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "2097:46:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "2128:9:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2139:2:2",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2124:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2124:18:2"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "2111:12:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2111:32:2"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "2101:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "2190:16:2",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2199:1:2",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2202:1:2",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "2192:6:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2192:12:2"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "2192:12:2"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "2162:6:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2170:18:2",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "2159:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2159:30:2"
                      },
                      "nodeType": "YulIf",
                      "src": "2156:2:2"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "2220:73:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "2265:9:2"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "2276:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2261:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2261:22:2"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2285:7:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_string_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "2230:30:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2230:63:2"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "2220:6:2"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "2313:221:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "2328:46:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "2359:9:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2370:2:2",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2355:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2355:18:2"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "2342:12:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2342:32:2"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "2332:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "2421:16:2",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2430:1:2",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2433:1:2",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "2423:6:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2423:12:2"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "2423:12:2"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "2393:6:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2401:18:2",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "2390:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2390:30:2"
                      },
                      "nodeType": "YulIf",
                      "src": "2387:2:2"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "2451:73:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "2496:9:2"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "2507:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2492:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2492:22:2"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2516:7:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_string_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "2461:30:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2461:63:2"
                      },
                      "variableNames": [
                        {
                          "name": "value2",
                          "nodeType": "YulIdentifier",
                          "src": "2451:6:2"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_int256t_string_memory_ptrt_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1838:9:2",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "1849:7:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1861:6:2",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "1869:6:2",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "1877:6:2",
                "type": ""
              }
            ],
            "src": "1765:776:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2650:530:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2696:16:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2705:1:2",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2708:1:2",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "2698:6:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2698:12:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2698:12:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2671:7:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2680:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2667:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2667:23:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2692:2:2",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "2663:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2663:32:2"
                  },
                  "nodeType": "YulIf",
                  "src": "2660:2:2"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "2722:220:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "2737:45:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "2768:9:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2779:1:2",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2764:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2764:17:2"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "2751:12:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2751:31:2"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "2741:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "2829:16:2",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2838:1:2",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "2841:1:2",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "2831:6:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2831:12:2"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "2831:12:2"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "2801:6:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2809:18:2",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "2798:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2798:30:2"
                      },
                      "nodeType": "YulIf",
                      "src": "2795:2:2"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "2859:73:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "2904:9:2"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "2915:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2900:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2900:22:2"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "2924:7:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_string_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "2869:30:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2869:63:2"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "2859:6:2"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "2952:221:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "2967:46:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "2998:9:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3009:2:2",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "2994:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2994:18:2"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "2981:12:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2981:32:2"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "2971:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "3060:16:2",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3069:1:2",
                                  "type": "",
                                  "value": "0"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3072:1:2",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "revert",
                                "nodeType": "YulIdentifier",
                                "src": "3062:6:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3062:12:2"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "3062:12:2"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "3032:6:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3040:18:2",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "3029:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3029:30:2"
                      },
                      "nodeType": "YulIf",
                      "src": "3026:2:2"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "3090:73:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "3135:9:2"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "3146:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3131:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3131:22:2"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3155:7:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_string_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "3100:30:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3100:63:2"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "3090:6:2"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_string_memory_ptrt_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2612:9:2",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "2623:7:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2635:6:2",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "2643:6:2",
                "type": ""
              }
            ],
            "src": "2547:633:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3269:74:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "3286:3:2"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "3329:5:2"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_address",
                              "nodeType": "YulIdentifier",
                              "src": "3311:17:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3311:24:2"
                          }
                        ],
                        "functionName": {
                          "name": "leftAlign_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "3291:19:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3291:45:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3279:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3279:58:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3279:58:2"
                }
              ]
            },
            "name": "abi_encode_t_address_to_t_address_nonPadded_inplace_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "3257:5:2",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "3264:3:2",
                "type": ""
              }
            ],
            "src": "3186:157:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3408:50:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "3425:3:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "3445:5:2"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_bool",
                          "nodeType": "YulIdentifier",
                          "src": "3430:14:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3430:21:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3418:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3418:34:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3418:34:2"
                }
              ]
            },
            "name": "abi_encode_t_bool_to_t_bool_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "3396:5:2",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "3403:3:2",
                "type": ""
              }
            ],
            "src": "3349:109:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3556:272:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3566:53:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "3613:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "array_length_t_string_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "3580:32:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3580:39:2"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "3570:6:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3628:78:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "3694:3:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "3699:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "3635:58:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3635:71:2"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "3628:3:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "3741:5:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3748:4:2",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3737:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3737:16:2"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "3755:3:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "3760:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "copy_memory_to_memory",
                      "nodeType": "YulIdentifier",
                      "src": "3715:21:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3715:52:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3715:52:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3776:46:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "3787:3:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "3814:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "round_up_to_mul_of_32",
                          "nodeType": "YulIdentifier",
                          "src": "3792:21:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3792:29:2"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3783:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3783:39:2"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "3776:3:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "3537:5:2",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "3544:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "3552:3:2",
                "type": ""
              }
            ],
            "src": "3464:364:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3899:53:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "3916:3:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "3939:5:2"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "3921:17:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3921:24:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3909:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3909:37:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3909:37:2"
                }
              ]
            },
            "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "3887:5:2",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "3894:3:2",
                "type": ""
              }
            ],
            "src": "3834:118:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4041:74:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4058:3:2"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "4101:5:2"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "4083:17:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4083:24:2"
                          }
                        ],
                        "functionName": {
                          "name": "leftAlign_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "4063:19:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4063:45:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4051:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4051:58:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4051:58:2"
                }
              ]
            },
            "name": "abi_encode_t_uint256_to_t_uint256_nonPadded_inplace_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4029:5:2",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "4036:3:2",
                "type": ""
              }
            ],
            "src": "3958:157:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4293:366:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "4366:6:2"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4375:3:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_nonPadded_inplace_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "4304:61:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4304:75:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4304:75:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4388:19:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4399:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4404:2:2",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4395:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4395:12:2"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "4388:3:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "4479:6:2"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4488:3:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_nonPadded_inplace_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "4417:61:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4417:75:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4417:75:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4501:19:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4512:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4517:2:2",
                        "type": "",
                        "value": "20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4508:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4508:12:2"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "4501:3:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "4592:6:2"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4601:3:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_nonPadded_inplace_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "4530:61:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4530:75:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4530:75:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4614:19:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "4625:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4630:2:2",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4621:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4621:12:2"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "4614:3:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4643:10:2",
                  "value": {
                    "name": "pos",
                    "nodeType": "YulIdentifier",
                    "src": "4650:3:2"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "4643:3:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_packed_t_uint256_t_address_t_uint256__to_t_uint256_t_address_t_uint256__nonPadded_inplace_fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "4256:3:2",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "4262:6:2",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "4270:6:2",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "4278:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "4289:3:2",
                "type": ""
              }
            ],
            "src": "4121:538:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4757:118:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4767:26:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4779:9:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4790:2:2",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4775:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4775:18:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "4767:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "4841:6:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4854:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4865:1:2",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4850:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4850:17:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_bool_to_t_bool_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "4803:37:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4803:65:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4803:65:2"
                }
              ]
            },
            "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4729:9:2",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "4741:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "4752:4:2",
                "type": ""
              }
            ],
            "src": "4665:210:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4979:124:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4989:26:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5001:9:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5012:2:2",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4997:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4997:18:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "4989:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "5069:6:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5082:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5093:1:2",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5078:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5078:17:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "5025:43:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5025:71:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5025:71:2"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4951:9:2",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "4963:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "4974:4:2",
                "type": ""
              }
            ],
            "src": "4881:222:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5303:430:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "5313:26:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5325:9:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5336:2:2",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5321:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5321:18:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "5313:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "5393:6:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5406:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5417:1:2",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5402:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5402:17:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "5349:43:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5349:71:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5349:71:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5441:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5452:2:2",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5437:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5437:18:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "5461:4:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5467:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "5457:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5457:20:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5430:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5430:48:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5430:48:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5487:86:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "5559:6:2"
                      },
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "5568:4:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "5495:63:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5495:78:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "5487:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5594:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5605:2:2",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5590:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5590:18:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "5614:4:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5620:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "5610:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5610:20:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5583:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5583:48:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5583:48:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5640:86:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "5712:6:2"
                      },
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "5721:4:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "5648:63:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5648:78:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "5640:4:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256_t_string_memory_ptr_t_string_memory_ptr__to_t_uint256_t_string_memory_ptr_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "5259:9:2",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "5271:6:2",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "5279:6:2",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "5287:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "5298:4:2",
                "type": ""
              }
            ],
            "src": "5109:624:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5780:88:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "5790:30:2",
                  "value": {
                    "arguments": [],
                    "functionName": {
                      "name": "allocate_unbounded",
                      "nodeType": "YulIdentifier",
                      "src": "5800:18:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5800:20:2"
                  },
                  "variableNames": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulIdentifier",
                      "src": "5790:6:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "5849:6:2"
                      },
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "5857:4:2"
                      }
                    ],
                    "functionName": {
                      "name": "finalize_allocation",
                      "nodeType": "YulIdentifier",
                      "src": "5829:19:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5829:33:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5829:33:2"
                }
              ]
            },
            "name": "allocate_memory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "size",
                "nodeType": "YulTypedName",
                "src": "5764:4:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "5773:6:2",
                "type": ""
              }
            ],
            "src": "5739:129:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5914:35:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "5924:19:2",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5940:2:2",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "5934:5:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5934:9:2"
                  },
                  "variableNames": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulIdentifier",
                      "src": "5924:6:2"
                    }
                  ]
                }
              ]
            },
            "name": "allocate_unbounded",
            "nodeType": "YulFunctionDefinition",
            "returnVariables": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "5907:6:2",
                "type": ""
              }
            ],
            "src": "5874:75:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6022:241:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6127:22:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "6129:16:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6129:18:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6129:18:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "6099:6:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6107:18:2",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "6096:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6096:30:2"
                  },
                  "nodeType": "YulIf",
                  "src": "6093:2:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6159:37:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "6189:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "round_up_to_mul_of_32",
                      "nodeType": "YulIdentifier",
                      "src": "6167:21:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6167:29:2"
                  },
                  "variableNames": [
                    {
                      "name": "size",
                      "nodeType": "YulIdentifier",
                      "src": "6159:4:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6233:23:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "6245:4:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6251:4:2",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6241:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6241:15:2"
                  },
                  "variableNames": [
                    {
                      "name": "size",
                      "nodeType": "YulIdentifier",
                      "src": "6233:4:2"
                    }
                  ]
                }
              ]
            },
            "name": "array_allocation_size_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "6006:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "size",
                "nodeType": "YulTypedName",
                "src": "6017:4:2",
                "type": ""
              }
            ],
            "src": "5955:308:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6328:40:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6339:22:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "6355:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "6349:5:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6349:12:2"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "6339:6:2"
                    }
                  ]
                }
              ]
            },
            "name": "array_length_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "6311:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "6321:6:2",
                "type": ""
              }
            ],
            "src": "6269:99:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6470:73:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "6487:3:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "6492:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "6480:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6480:19:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6480:19:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "6508:29:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "6527:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6532:4:2",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "6523:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6523:14:2"
                  },
                  "variableNames": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulIdentifier",
                      "src": "6508:11:2"
                    }
                  ]
                }
              ]
            },
            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "6442:3:2",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "6447:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updated_pos",
                "nodeType": "YulTypedName",
                "src": "6458:11:2",
                "type": ""
              }
            ],
            "src": "6374:169:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6594:51:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6604:35:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "6633:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint160",
                      "nodeType": "YulIdentifier",
                      "src": "6615:17:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6615:24:2"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "6604:7:2"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "6576:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "6586:7:2",
                "type": ""
              }
            ],
            "src": "6549:96:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6693:48:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6703:32:2",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "6728:5:2"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "6721:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6721:13:2"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "6714:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6714:21:2"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "6703:7:2"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_bool",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "6675:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "6685:7:2",
                "type": ""
              }
            ],
            "src": "6651:90:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6791:32:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6801:16:2",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "6812:5:2"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "6801:7:2"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_int256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "6773:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "6783:7:2",
                "type": ""
              }
            ],
            "src": "6747:76:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6874:81:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6884:65:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "6899:5:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6906:42:2",
                        "type": "",
                        "value": "0xffffffffffffffffffffffffffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "6895:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6895:54:2"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "6884:7:2"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint160",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "6856:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "6866:7:2",
                "type": ""
              }
            ],
            "src": "6829:126:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7006:32:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "7016:16:2",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "7027:5:2"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "7016:7:2"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "6988:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "6998:7:2",
                "type": ""
              }
            ],
            "src": "6961:77:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7095:103:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "dst",
                        "nodeType": "YulIdentifier",
                        "src": "7118:3:2"
                      },
                      {
                        "name": "src",
                        "nodeType": "YulIdentifier",
                        "src": "7123:3:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "7128:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "calldatacopy",
                      "nodeType": "YulIdentifier",
                      "src": "7105:12:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7105:30:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7105:30:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dst",
                            "nodeType": "YulIdentifier",
                            "src": "7176:3:2"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "7181:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "7172:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7172:16:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7190:1:2",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7165:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7165:27:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7165:27:2"
                }
              ]
            },
            "name": "copy_calldata_to_memory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "7077:3:2",
                "type": ""
              },
              {
                "name": "dst",
                "nodeType": "YulTypedName",
                "src": "7082:3:2",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "7087:6:2",
                "type": ""
              }
            ],
            "src": "7044:154:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7253:258:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "7263:10:2",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "7272:1:2",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "7267:1:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7332:63:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "7357:3:2"
                                },
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "7362:1:2"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "7353:3:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "7353:11:2"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "src",
                                      "nodeType": "YulIdentifier",
                                      "src": "7376:3:2"
                                    },
                                    {
                                      "name": "i",
                                      "nodeType": "YulIdentifier",
                                      "src": "7381:1:2"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "7372:3:2"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "7372:11:2"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nodeType": "YulIdentifier",
                                "src": "7366:5:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "7366:18:2"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "7346:6:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7346:39:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7346:39:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "7293:1:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "7296:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "7290:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7290:13:2"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "7304:19:2",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "7306:15:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "7315:1:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7318:2:2",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "7311:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7311:10:2"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "7306:1:2"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "7286:3:2",
                    "statements": []
                  },
                  "src": "7282:113:2"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7429:76:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "7479:3:2"
                                },
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "7484:6:2"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "7475:3:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "7475:16:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7493:1:2",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "7468:6:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7468:27:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7468:27:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "7410:1:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "7413:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "7407:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7407:13:2"
                  },
                  "nodeType": "YulIf",
                  "src": "7404:2:2"
                }
              ]
            },
            "name": "copy_memory_to_memory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "7235:3:2",
                "type": ""
              },
              {
                "name": "dst",
                "nodeType": "YulTypedName",
                "src": "7240:3:2",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "7245:6:2",
                "type": ""
              }
            ],
            "src": "7204:307:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7568:269:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "7578:22:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "7592:4:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7598:1:2",
                        "type": "",
                        "value": "2"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "7588:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7588:12:2"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "7578:6:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "7609:38:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "7639:4:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7645:1:2",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "7635:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7635:12:2"
                  },
                  "variables": [
                    {
                      "name": "outOfPlaceEncoding",
                      "nodeType": "YulTypedName",
                      "src": "7613:18:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7686:51:2",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "7700:27:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "7714:6:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7722:4:2",
                              "type": "",
                              "value": "0x7f"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "7710:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7710:17:2"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "7700:6:2"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "7666:18:2"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "7659:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7659:26:2"
                  },
                  "nodeType": "YulIf",
                  "src": "7656:2:2"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7789:42:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x22",
                            "nodeType": "YulIdentifier",
                            "src": "7803:16:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7803:18:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7803:18:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "7753:18:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "7776:6:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7784:2:2",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "7773:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7773:14:2"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "7750:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7750:38:2"
                  },
                  "nodeType": "YulIf",
                  "src": "7747:2:2"
                }
              ]
            },
            "name": "extract_byte_array_length",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "7552:4:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "7561:6:2",
                "type": ""
              }
            ],
            "src": "7517:320:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7886:238:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "7896:58:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "7918:6:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "size",
                            "nodeType": "YulIdentifier",
                            "src": "7948:4:2"
                          }
                        ],
                        "functionName": {
                          "name": "round_up_to_mul_of_32",
                          "nodeType": "YulIdentifier",
                          "src": "7926:21:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7926:27:2"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7914:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7914:40:2"
                  },
                  "variables": [
                    {
                      "name": "newFreePtr",
                      "nodeType": "YulTypedName",
                      "src": "7900:10:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "8065:22:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "8067:16:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8067:18:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "8067:18:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "8008:10:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "8020:18:2",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "8005:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8005:34:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "8044:10:2"
                          },
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "8056:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "8041:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8041:22:2"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "8002:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8002:62:2"
                  },
                  "nodeType": "YulIf",
                  "src": "7999:2:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8103:2:2",
                        "type": "",
                        "value": "64"
                      },
                      {
                        "name": "newFreePtr",
                        "nodeType": "YulIdentifier",
                        "src": "8107:10:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8096:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8096:22:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8096:22:2"
                }
              ]
            },
            "name": "finalize_allocation",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "7872:6:2",
                "type": ""
              },
              {
                "name": "size",
                "nodeType": "YulTypedName",
                "src": "7880:4:2",
                "type": ""
              }
            ],
            "src": "7843:281:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8173:190:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8183:33:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "8210:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "8192:17:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8192:24:2"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "8183:5:2"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "8306:22:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "8308:16:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8308:18:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "8308:18:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "8231:5:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8238:66:2",
                        "type": "",
                        "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "8228:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8228:77:2"
                  },
                  "nodeType": "YulIf",
                  "src": "8225:2:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8337:20:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "8348:5:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8355:1:2",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8344:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8344:13:2"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "8337:3:2"
                    }
                  ]
                }
              ]
            },
            "name": "increment_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "8159:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "8169:3:2",
                "type": ""
              }
            ],
            "src": "8130:233:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8416:53:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8426:37:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "8457:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "leftAlign_t_uint160",
                      "nodeType": "YulIdentifier",
                      "src": "8437:19:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8437:26:2"
                  },
                  "variableNames": [
                    {
                      "name": "aligned",
                      "nodeType": "YulIdentifier",
                      "src": "8426:7:2"
                    }
                  ]
                }
              ]
            },
            "name": "leftAlign_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "8398:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "aligned",
                "nodeType": "YulTypedName",
                "src": "8408:7:2",
                "type": ""
              }
            ],
            "src": "8369:100:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8522:47:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8532:31:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "8557:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "shift_left_96",
                      "nodeType": "YulIdentifier",
                      "src": "8543:13:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8543:20:2"
                  },
                  "variableNames": [
                    {
                      "name": "aligned",
                      "nodeType": "YulIdentifier",
                      "src": "8532:7:2"
                    }
                  ]
                }
              ]
            },
            "name": "leftAlign_t_uint160",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "8504:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "aligned",
                "nodeType": "YulTypedName",
                "src": "8514:7:2",
                "type": ""
              }
            ],
            "src": "8475:94:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8622:32:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8632:16:2",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "8643:5:2"
                  },
                  "variableNames": [
                    {
                      "name": "aligned",
                      "nodeType": "YulIdentifier",
                      "src": "8632:7:2"
                    }
                  ]
                }
              ]
            },
            "name": "leftAlign_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "8604:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "aligned",
                "nodeType": "YulTypedName",
                "src": "8614:7:2",
                "type": ""
              }
            ],
            "src": "8575:79:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8694:142:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8704:25:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "8727:1:2"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "8709:17:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8709:20:2"
                  },
                  "variableNames": [
                    {
                      "name": "x",
                      "nodeType": "YulIdentifier",
                      "src": "8704:1:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8738:25:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "8761:1:2"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "8743:17:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8743:20:2"
                  },
                  "variableNames": [
                    {
                      "name": "y",
                      "nodeType": "YulIdentifier",
                      "src": "8738:1:2"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "8785:22:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x12",
                            "nodeType": "YulIdentifier",
                            "src": "8787:16:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8787:18:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "8787:18:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "8782:1:2"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "8775:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8775:9:2"
                  },
                  "nodeType": "YulIf",
                  "src": "8772:2:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8816:14:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "8825:1:2"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "8828:1:2"
                      }
                    ],
                    "functionName": {
                      "name": "mod",
                      "nodeType": "YulIdentifier",
                      "src": "8821:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8821:9:2"
                  },
                  "variableNames": [
                    {
                      "name": "r",
                      "nodeType": "YulIdentifier",
                      "src": "8816:1:2"
                    }
                  ]
                }
              ]
            },
            "name": "mod_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "8683:1:2",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "8686:1:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "r",
                "nodeType": "YulTypedName",
                "src": "8692:1:2",
                "type": ""
              }
            ],
            "src": "8660:176:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8870:152:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8887:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8890:77:2",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8880:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8880:88:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8880:88:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8984:1:2",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8987:4:2",
                        "type": "",
                        "value": "0x11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8977:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8977:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8977:15:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9008:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9011:4:2",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "9001:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9001:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9001:15:2"
                }
              ]
            },
            "name": "panic_error_0x11",
            "nodeType": "YulFunctionDefinition",
            "src": "8842:180:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9056:152:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9073:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9076:77:2",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9066:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9066:88:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9066:88:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9170:1:2",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9173:4:2",
                        "type": "",
                        "value": "0x12"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9163:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9163:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9163:15:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9194:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9197:4:2",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "9187:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9187:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9187:15:2"
                }
              ]
            },
            "name": "panic_error_0x12",
            "nodeType": "YulFunctionDefinition",
            "src": "9028:180:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9242:152:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9259:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9262:77:2",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9252:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9252:88:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9252:88:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9356:1:2",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9359:4:2",
                        "type": "",
                        "value": "0x22"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9349:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9349:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9349:15:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9380:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9383:4:2",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "9373:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9373:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9373:15:2"
                }
              ]
            },
            "name": "panic_error_0x22",
            "nodeType": "YulFunctionDefinition",
            "src": "9214:180:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9428:152:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9445:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9448:77:2",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9438:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9438:88:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9438:88:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9542:1:2",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9545:4:2",
                        "type": "",
                        "value": "0x41"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9535:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9535:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9535:15:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9566:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9569:4:2",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "9559:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9559:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9559:15:2"
                }
              ]
            },
            "name": "panic_error_0x41",
            "nodeType": "YulFunctionDefinition",
            "src": "9400:180:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9634:54:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "9644:38:2",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "9662:5:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9669:2:2",
                            "type": "",
                            "value": "31"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9658:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9658:14:2"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9678:2:2",
                            "type": "",
                            "value": "31"
                          }
                        ],
                        "functionName": {
                          "name": "not",
                          "nodeType": "YulIdentifier",
                          "src": "9674:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9674:7:2"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "9654:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9654:28:2"
                  },
                  "variableNames": [
                    {
                      "name": "result",
                      "nodeType": "YulIdentifier",
                      "src": "9644:6:2"
                    }
                  ]
                }
              ]
            },
            "name": "round_up_to_mul_of_32",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "9617:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "result",
                "nodeType": "YulTypedName",
                "src": "9627:6:2",
                "type": ""
              }
            ],
            "src": "9586:102:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9736:52:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "9746:35:2",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9771:2:2",
                        "type": "",
                        "value": "96"
                      },
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "9775:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "shl",
                      "nodeType": "YulIdentifier",
                      "src": "9767:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9767:14:2"
                  },
                  "variableNames": [
                    {
                      "name": "newValue",
                      "nodeType": "YulIdentifier",
                      "src": "9746:8:2"
                    }
                  ]
                }
              ]
            },
            "name": "shift_left_96",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "9717:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "newValue",
                "nodeType": "YulTypedName",
                "src": "9727:8:2",
                "type": ""
              }
            ],
            "src": "9694:94:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9837:79:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "9894:16:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9903:1:2",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9906:1:2",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "9896:6:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9896:12:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "9896:12:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "9860:5:2"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "9885:5:2"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_address",
                              "nodeType": "YulIdentifier",
                              "src": "9867:17:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "9867:24:2"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "9857:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9857:35:2"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "9850:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9850:43:2"
                  },
                  "nodeType": "YulIf",
                  "src": "9847:2:2"
                }
              ]
            },
            "name": "validator_revert_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "9830:5:2",
                "type": ""
              }
            ],
            "src": "9794:122:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9964:78:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "10020:16:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10029:1:2",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10032:1:2",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "10022:6:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10022:12:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "10022:12:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "9987:5:2"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "10011:5:2"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_int256",
                              "nodeType": "YulIdentifier",
                              "src": "9994:16:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "9994:23:2"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "9984:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9984:34:2"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "9977:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9977:42:2"
                  },
                  "nodeType": "YulIf",
                  "src": "9974:2:2"
                }
              ]
            },
            "name": "validator_revert_t_int256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "9957:5:2",
                "type": ""
              }
            ],
            "src": "9922:120:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10091:79:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "10148:16:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10157:1:2",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10160:1:2",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "10150:6:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10150:12:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "10150:12:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "10114:5:2"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "10139:5:2"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "10121:17:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "10121:24:2"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "10111:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10111:35:2"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "10104:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10104:43:2"
                  },
                  "nodeType": "YulIf",
                  "src": "10101:2:2"
                }
              ]
            },
            "name": "validator_revert_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "10084:5:2",
                "type": ""
              }
            ],
            "src": "10048:122:2"
          }
        ]
      },
      "contents": "{\n\n    function abi_decode_available_length_t_string_memory_ptr(src, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_string_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert(0, 0) }\n        copy_calldata_to_memory(src, dst, length)\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_t_int256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_int256(value)\n    }\n\n    // string\n    function abi_decode_t_string_memory_ptr(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert(0, 0) }\n        let length := calldataload(offset)\n        array := abi_decode_available_length_t_string_memory_ptr(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_int256t_string_memory_ptrt_string_memory_ptr(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert(0, 0) }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_int256(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 32))\n            if gt(offset, 0xffffffffffffffff) { revert(0, 0) }\n\n            value1 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 64))\n            if gt(offset, 0xffffffffffffffff) { revert(0, 0) }\n\n            value2 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_string_memory_ptrt_string_memory_ptr(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert(0, 0) }\n\n        {\n\n            let offset := calldataload(add(headStart, 0))\n            if gt(offset, 0xffffffffffffffff) { revert(0, 0) }\n\n            value0 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 32))\n            if gt(offset, 0xffffffffffffffff) { revert(0, 0) }\n\n            value1 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_address_to_t_address_nonPadded_inplace_fromStack(value, pos) {\n        mstore(pos, leftAlign_t_address(cleanup_t_address(value)))\n    }\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_nonPadded_inplace_fromStack(value, pos) {\n        mstore(pos, leftAlign_t_uint256(cleanup_t_uint256(value)))\n    }\n\n    function abi_encode_tuple_packed_t_uint256_t_address_t_uint256__to_t_uint256_t_address_t_uint256__nonPadded_inplace_fromStack_reversed(pos , value2, value1, value0) -> end {\n\n        abi_encode_t_uint256_to_t_uint256_nonPadded_inplace_fromStack(value0,  pos)\n        pos := add(pos, 32)\n\n        abi_encode_t_address_to_t_address_nonPadded_inplace_fromStack(value1,  pos)\n        pos := add(pos, 20)\n\n        abi_encode_t_uint256_to_t_uint256_nonPadded_inplace_fromStack(value2,  pos)\n        pos := add(pos, 32)\n\n        end := pos\n    }\n\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_tuple_t_uint256_t_string_memory_ptr_t_string_memory_ptr__to_t_uint256_t_string_memory_ptr_t_string_memory_ptr__fromStack_reversed(headStart , value2, value1, value0) -> tail {\n        tail := add(headStart, 96)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n        mstore(add(headStart, 32), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value1,  tail)\n\n        mstore(add(headStart, 64), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value2,  tail)\n\n    }\n\n    function allocate_memory(size) -> memPtr {\n        memPtr := allocate_unbounded()\n        finalize_allocation(memPtr, size)\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function array_allocation_size_t_string_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := round_up_to_mul_of_32(length)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function cleanup_t_int256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function copy_calldata_to_memory(src, dst, length) {\n        calldatacopy(dst, src, length)\n        // clear end\n        mstore(add(dst, length), 0)\n    }\n\n    function copy_memory_to_memory(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length)\n        {\n            // clear end\n            mstore(add(dst, length), 0)\n        }\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function finalize_allocation(memPtr, size) {\n        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function increment_t_uint256(value) -> ret {\n        value := cleanup_t_uint256(value)\n        if eq(value, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n\n    function leftAlign_t_address(value) -> aligned {\n        aligned := leftAlign_t_uint160(value)\n    }\n\n    function leftAlign_t_uint160(value) -> aligned {\n        aligned := shift_left_96(value)\n    }\n\n    function leftAlign_t_uint256(value) -> aligned {\n        aligned := value\n    }\n\n    function mod_t_uint256(x, y) -> r {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        if iszero(y) { panic_error_0x12() }\n        r := mod(x, y)\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x12() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x12)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function shift_left_96(value) -> newValue {\n        newValue :=\n\n        shl(96, value)\n\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function validator_revert_t_int256(value) {\n        if iszero(eq(value, cleanup_t_int256(value))) { revert(0, 0) }\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n}\n",
      "id": 2,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "sourceMap": "61:1664:0:-:0;;;106:1;81:26;;61:1664;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "61:1664:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;416:41;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;466:278;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;357:52;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;752:589;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;416:41;;;;;;;;;;;;;;;;;:::o;466:278::-;545:13;561:9;:21;571:10;561:21;;;;;;;;;;;;;;;;545:37;;622:29;;;;;;;;626:8;622:29;;;;636:5;622:29;;;;644:6;622:29;;;593:4;:16;598:10;593:16;;;;;;;;;;;;;;;:26;610:8;593:26;;;;;;;;;;;:58;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;667:35;678:8;688:5;695:6;667:35;;;;;;;;:::i;:::-;;;;;;;;713:9;:21;723:10;713:21;;;;;;;;;;;;;;;;:23;;;;;;;;;:::i;:::-;;;;;;466:278;;;:::o;357:52::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;752:589::-;847:4;864:8;875:5;864:16;;891:9;;:11;;;;;;;;;:::i;:::-;;;;;;914;936:17;1030:3;988:15;1004:10;1015:9;;971:54;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;961:65;;;;;;956:71;;:77;;;;:::i;:::-;936:97;;1063:2;1047:12;:18;1044:34;;1077:1;1067:11;;1044:34;1108:2;1093:12;:17;1090:33;;;1122:1;1112:11;;1090:33;1153:2;1137:12;:18;1134:34;;1167:1;1157:11;;1134:34;1197:7;1184:9;:20;1181:99;;;1220:23;1230:5;1236:6;1220:9;:23::i;:::-;1264:4;1258:10;;1181:99;1295:17;1308:3;1295:17;;;;;;:::i;:::-;;;;;;;;1330:3;1323:10;;;;;752:589;;;;;:::o;-1:-1:-1:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:345:2:-;;110:66;126:49;168:6;126:49;:::i;:::-;110:66;:::i;:::-;101:75;;199:6;192:5;185:21;237:4;230:5;226:16;275:3;266:6;261:3;257:16;254:25;251:2;;;292:1;289;282:12;251:2;305:41;339:6;334:3;329;305:41;:::i;:::-;91:261;;;;;;:::o;358:139::-;;442:6;429:20;420:29;;458:33;485:5;458:33;:::i;:::-;410:87;;;;:::o;503:137::-;;586:6;573:20;564:29;;602:32;628:5;602:32;:::i;:::-;554:86;;;;:::o;660:273::-;;765:3;758:4;750:6;746:17;742:27;732:2;;783:1;780;773:12;732:2;823:6;810:20;848:79;923:3;915:6;908:4;900:6;896:17;848:79;:::i;:::-;839:88;;722:211;;;;;:::o;939:139::-;;1023:6;1010:20;1001:29;;1039:33;1066:5;1039:33;:::i;:::-;991:87;;;;:::o;1084:262::-;;1192:2;1180:9;1171:7;1167:23;1163:32;1160:2;;;1208:1;1205;1198:12;1160:2;1251:1;1276:53;1321:7;1312:6;1301:9;1297:22;1276:53;:::i;:::-;1266:63;;1222:117;1150:196;;;;:::o;1352:407::-;;;1477:2;1465:9;1456:7;1452:23;1448:32;1445:2;;;1493:1;1490;1483:12;1445:2;1536:1;1561:53;1606:7;1597:6;1586:9;1582:22;1561:53;:::i;:::-;1551:63;;1507:117;1663:2;1689:53;1734:7;1725:6;1714:9;1710:22;1689:53;:::i;:::-;1679:63;;1634:118;1435:324;;;;;:::o;1765:776::-;;;;1926:2;1914:9;1905:7;1901:23;1897:32;1894:2;;;1942:1;1939;1932:12;1894:2;1985:1;2010:52;2054:7;2045:6;2034:9;2030:22;2010:52;:::i;:::-;2000:62;;1956:116;2139:2;2128:9;2124:18;2111:32;2170:18;2162:6;2159:30;2156:2;;;2202:1;2199;2192:12;2156:2;2230:63;2285:7;2276:6;2265:9;2261:22;2230:63;:::i;:::-;2220:73;;2082:221;2370:2;2359:9;2355:18;2342:32;2401:18;2393:6;2390:30;2387:2;;;2433:1;2430;2423:12;2387:2;2461:63;2516:7;2507:6;2496:9;2492:22;2461:63;:::i;:::-;2451:73;;2313:221;1884:657;;;;;:::o;2547:633::-;;;2692:2;2680:9;2671:7;2667:23;2663:32;2660:2;;;2708:1;2705;2698:12;2660:2;2779:1;2768:9;2764:17;2751:31;2809:18;2801:6;2798:30;2795:2;;;2841:1;2838;2831:12;2795:2;2869:63;2924:7;2915:6;2904:9;2900:22;2869:63;:::i;:::-;2859:73;;2722:220;3009:2;2998:9;2994:18;2981:32;3040:18;3032:6;3029:30;3026:2;;;3072:1;3069;3062:12;3026:2;3100:63;3155:7;3146:6;3135:9;3131:22;3100:63;:::i;:::-;3090:73;;2952:221;2650:530;;;;;:::o;3186:157::-;3291:45;3311:24;3329:5;3311:24;:::i;:::-;3291:45;:::i;:::-;3286:3;3279:58;3269:74;;:::o;3349:109::-;3430:21;3445:5;3430:21;:::i;:::-;3425:3;3418:34;3408:50;;:::o;3464:364::-;;3580:39;3613:5;3580:39;:::i;:::-;3635:71;3699:6;3694:3;3635:71;:::i;:::-;3628:78;;3715:52;3760:6;3755:3;3748:4;3741:5;3737:16;3715:52;:::i;:::-;3792:29;3814:6;3792:29;:::i;:::-;3787:3;3783:39;3776:46;;3556:272;;;;;:::o;3834:118::-;3921:24;3939:5;3921:24;:::i;:::-;3916:3;3909:37;3899:53;;:::o;3958:157::-;4063:45;4083:24;4101:5;4083:24;:::i;:::-;4063:45;:::i;:::-;4058:3;4051:58;4041:74;;:::o;4121:538::-;;4304:75;4375:3;4366:6;4304:75;:::i;:::-;4404:2;4399:3;4395:12;4388:19;;4417:75;4488:3;4479:6;4417:75;:::i;:::-;4517:2;4512:3;4508:12;4501:19;;4530:75;4601:3;4592:6;4530:75;:::i;:::-;4630:2;4625:3;4621:12;4614:19;;4650:3;4643:10;;4293:366;;;;;;:::o;4665:210::-;;4790:2;4779:9;4775:18;4767:26;;4803:65;4865:1;4854:9;4850:17;4841:6;4803:65;:::i;:::-;4757:118;;;;:::o;4881:222::-;;5012:2;5001:9;4997:18;4989:26;;5025:71;5093:1;5082:9;5078:17;5069:6;5025:71;:::i;:::-;4979:124;;;;:::o;5109:624::-;;5336:2;5325:9;5321:18;5313:26;;5349:71;5417:1;5406:9;5402:17;5393:6;5349:71;:::i;:::-;5467:9;5461:4;5457:20;5452:2;5441:9;5437:18;5430:48;5495:78;5568:4;5559:6;5495:78;:::i;:::-;5487:86;;5620:9;5614:4;5610:20;5605:2;5594:9;5590:18;5583:48;5648:78;5721:4;5712:6;5648:78;:::i;:::-;5640:86;;5303:430;;;;;;:::o;5739:129::-;;5800:20;;:::i;:::-;5790:30;;5829:33;5857:4;5849:6;5829:33;:::i;:::-;5780:88;;;:::o;5874:75::-;;5940:2;5934:9;5924:19;;5914:35;:::o;5955:308::-;;6107:18;6099:6;6096:30;6093:2;;;6129:18;;:::i;:::-;6093:2;6167:29;6189:6;6167:29;:::i;:::-;6159:37;;6251:4;6245;6241:15;6233:23;;6022:241;;;:::o;6269:99::-;;6355:5;6349:12;6339:22;;6328:40;;;:::o;6374:169::-;;6492:6;6487:3;6480:19;6532:4;6527:3;6523:14;6508:29;;6470:73;;;;:::o;6549:96::-;;6615:24;6633:5;6615:24;:::i;:::-;6604:35;;6594:51;;;:::o;6651:90::-;;6728:5;6721:13;6714:21;6703:32;;6693:48;;;:::o;6747:76::-;;6812:5;6801:16;;6791:32;;;:::o;6829:126::-;;6906:42;6899:5;6895:54;6884:65;;6874:81;;;:::o;6961:77::-;;7027:5;7016:16;;7006:32;;;:::o;7044:154::-;7128:6;7123:3;7118;7105:30;7190:1;7181:6;7176:3;7172:16;7165:27;7095:103;;;:::o;7204:307::-;7272:1;7282:113;7296:6;7293:1;7290:13;7282:113;;;7381:1;7376:3;7372:11;7366:18;7362:1;7357:3;7353:11;7346:39;7318:2;7315:1;7311:10;7306:15;;7282:113;;;7413:6;7410:1;7407:13;7404:2;;;7493:1;7484:6;7479:3;7475:16;7468:27;7404:2;7253:258;;;;:::o;7517:320::-;;7598:1;7592:4;7588:12;7578:22;;7645:1;7639:4;7635:12;7666:18;7656:2;;7722:4;7714:6;7710:17;7700:27;;7656:2;7784;7776:6;7773:14;7753:18;7750:38;7747:2;;;7803:18;;:::i;:::-;7747:2;7568:269;;;;:::o;7843:281::-;7926:27;7948:4;7926:27;:::i;:::-;7918:6;7914:40;8056:6;8044:10;8041:22;8020:18;8008:10;8005:34;8002:62;7999:2;;;8067:18;;:::i;:::-;7999:2;8107:10;8103:2;8096:22;7886:238;;;:::o;8130:233::-;;8192:24;8210:5;8192:24;:::i;:::-;8183:33;;8238:66;8231:5;8228:77;8225:2;;;8308:18;;:::i;:::-;8225:2;8355:1;8348:5;8344:13;8337:20;;8173:190;;;:::o;8369:100::-;;8437:26;8457:5;8437:26;:::i;:::-;8426:37;;8416:53;;;:::o;8475:94::-;;8543:20;8557:5;8543:20;:::i;:::-;8532:31;;8522:47;;;:::o;8575:79::-;;8643:5;8632:16;;8622:32;;;:::o;8660:176::-;;8709:20;8727:1;8709:20;:::i;:::-;8704:25;;8743:20;8761:1;8743:20;:::i;:::-;8738:25;;8782:1;8772:2;;8787:18;;:::i;:::-;8772:2;8828:1;8825;8821:9;8816:14;;8694:142;;;;:::o;8842:180::-;8890:77;8887:1;8880:88;8987:4;8984:1;8977:15;9011:4;9008:1;9001:15;9028:180;9076:77;9073:1;9066:88;9173:4;9170:1;9163:15;9197:4;9194:1;9187:15;9214:180;9262:77;9259:1;9252:88;9359:4;9356:1;9349:15;9383:4;9380:1;9373:15;9400:180;9448:77;9445:1;9438:88;9545:4;9542:1;9535:15;9569:4;9566:1;9559:15;9586:102;;9678:2;9674:7;9669:2;9662:5;9658:14;9654:28;9644:38;;9634:54;;;:::o;9694:94::-;;9775:5;9771:2;9767:14;9746:35;;9736:52;;;:::o;9794:122::-;9867:24;9885:5;9867:24;:::i;:::-;9860:5;9857:35;9847:2;;9906:1;9903;9896:12;9847:2;9837:79;:::o;9922:120::-;9994:23;10011:5;9994:23;:::i;:::-;9987:5;9984:34;9974:2;;10032:1;10029;10022:12;9974:2;9964:78;:::o;10048:122::-;10121:24;10139:5;10121:24;:::i;:::-;10114:5;10111:35;10101:2;;10160:1;10157;10150:12;10101:2;10091:79;:::o",
  "source": "// SPDX-License-Identifier: MIT\r\npragma solidity ^ 0.8.0;\r\n\r\ncontract Hats{\r\n    uint private randNonce = 0;\r\n\r\n    struct Hat{\r\n        uint id;\r\n        string name;\r\n        string color;\r\n    }\r\n\r\n    event HatCreated(\r\n        uint id,\r\n        string name,\r\n        string color\r\n    );\r\n\r\n    event StartLottery(\r\n          bool win\r\n    );\r\n\r\n\r\n    mapping(address => mapping(uint => Hat)) public hats;\r\n    mapping(address =>uint ) public hatsCount;\r\n\r\n    function createHat(string memory _name,string memory _color) public {\r\n        uint hatCount = hatsCount[msg.sender];\r\n        hats[msg.sender][hatCount] = Hat(hatCount, _name , _color);\r\n        emit HatCreated(hatCount, _name, _color);\r\n        hatsCount[msg.sender]++;\r\n    }\r\n\r\n    function startLottery(int _position , string memory _color,string memory _name) public returns(bool) {\r\n        bool win = false;\r\n        randNonce++; \r\n        int randInt;\r\n        uint randomNumber = uint(keccak256(abi.encodePacked(block.timestamp,msg.sender,randNonce))) % 100;\r\n        if(randomNumber >= 66) randInt = 3 ;\r\n        if(randomNumber < 33) randInt = 1;\r\n        if(randomNumber >= 66) randInt = 3;\r\n\r\n        if(_position == randInt){\r\n            createHat(_name,_color);\r\n            win = true;\r\n        }\r\n        emit StartLottery(win);\r\n        return win;\r\n    }\r\n\r\n    function randMod(uint _modulus) internal returns(int){\r\n         randNonce++; \r\n         uint randomNumber = uint(keccak256(abi.encodePacked(block.timestamp,msg.sender,randNonce))) % _modulus;\r\n         if(randomNumber >= 66) return int(3);\r\n         if(randomNumber < 33) return int(1);\r\n         if(randomNumber >= 66) return int(3);\r\n         return int(4);\r\n        }\r\n\r\n}",
  "sourcePath": "C:\\Users\\Maty_\\Desktop\\proyectos\\Sircon\\contracts\\Hats.sol",
  "ast": {
    "absolutePath": "project:/contracts/Hats.sol",
    "exportedSymbols": {
      "Hats": [
        220
      ]
    },
    "id": 221,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:24:0"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 220,
        "linearizedBaseContracts": [
          220
        ],
        "name": "Hats",
        "nameLocation": "70:4:0",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 4,
            "mutability": "mutable",
            "name": "randNonce",
            "nameLocation": "94:9:0",
            "nodeType": "VariableDeclaration",
            "scope": 220,
            "src": "81:26:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 2,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "81:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "30",
              "id": 3,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "106:1:0",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_0_by_1",
                "typeString": "int_const 0"
              },
              "value": "0"
            },
            "visibility": "private"
          },
          {
            "canonicalName": "Hats.Hat",
            "id": 11,
            "members": [
              {
                "constant": false,
                "id": 6,
                "mutability": "mutable",
                "name": "id",
                "nameLocation": "142:2:0",
                "nodeType": "VariableDeclaration",
                "scope": 11,
                "src": "137:7:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 5,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "137:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 8,
                "mutability": "mutable",
                "name": "name",
                "nameLocation": "162:4:0",
                "nodeType": "VariableDeclaration",
                "scope": 11,
                "src": "155:11:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 7,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "155:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 10,
                "mutability": "mutable",
                "name": "color",
                "nameLocation": "184:5:0",
                "nodeType": "VariableDeclaration",
                "scope": 11,
                "src": "177:12:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 9,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "177:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "Hat",
            "nameLocation": "123:3:0",
            "nodeType": "StructDefinition",
            "scope": 220,
            "src": "116:81:0",
            "visibility": "public"
          },
          {
            "anonymous": false,
            "id": 19,
            "name": "HatCreated",
            "nameLocation": "211:10:0",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 18,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 13,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "237:2:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 19,
                  "src": "232:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 12,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "232:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 15,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "257:4:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 19,
                  "src": "250:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 14,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "250:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "color",
                  "nameLocation": "279:5:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 19,
                  "src": "272:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 16,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "272:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "221:70:0"
            },
            "src": "205:87:0"
          },
          {
            "anonymous": false,
            "id": 23,
            "name": "StartLottery",
            "nameLocation": "306:12:0",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 22,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 21,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "win",
                  "nameLocation": "336:3:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 23,
                  "src": "331:8:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 20,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "331:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "318:28:0"
            },
            "src": "300:47:0"
          },
          {
            "constant": false,
            "functionSelector": "ab26c91b",
            "id": 30,
            "mutability": "mutable",
            "name": "hats",
            "nameLocation": "405:4:0",
            "nodeType": "VariableDeclaration",
            "scope": 220,
            "src": "357:52:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_struct$_Hat_$11_storage_$_$",
              "typeString": "mapping(address => mapping(uint256 => struct Hats.Hat))"
            },
            "typeName": {
              "id": 29,
              "keyType": {
                "id": 24,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "365:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "357:40:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_struct$_Hat_$11_storage_$_$",
                "typeString": "mapping(address => mapping(uint256 => struct Hats.Hat))"
              },
              "valueType": {
                "id": 28,
                "keyType": {
                  "id": 25,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "384:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "376:20:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Hat_$11_storage_$",
                  "typeString": "mapping(uint256 => struct Hats.Hat)"
                },
                "valueType": {
                  "id": 27,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 26,
                    "name": "Hat",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 11,
                    "src": "392:3:0"
                  },
                  "referencedDeclaration": 11,
                  "src": "392:3:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Hat_$11_storage_ptr",
                    "typeString": "struct Hats.Hat"
                  }
                }
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "02fa0bf4",
            "id": 34,
            "mutability": "mutable",
            "name": "hatsCount",
            "nameLocation": "448:9:0",
            "nodeType": "VariableDeclaration",
            "scope": 220,
            "src": "416:41:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
              "typeString": "mapping(address => uint256)"
            },
            "typeName": {
              "id": 33,
              "keyType": {
                "id": 31,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "424:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "416:24:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "valueType": {
                "id": 32,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "434:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 73,
              "nodeType": "Block",
              "src": "534:210:0",
              "statements": [
                {
                  "assignments": [
                    42
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 42,
                      "mutability": "mutable",
                      "name": "hatCount",
                      "nameLocation": "550:8:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 73,
                      "src": "545:13:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 41,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "545:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 47,
                  "initialValue": {
                    "baseExpression": {
                      "id": 43,
                      "name": "hatsCount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 34,
                      "src": "561:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                        "typeString": "mapping(address => uint256)"
                      }
                    },
                    "id": 46,
                    "indexExpression": {
                      "expression": {
                        "id": 44,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967281,
                        "src": "571:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 45,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "src": "571:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "561:21:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "545:37:0"
                },
                {
                  "expression": {
                    "id": 59,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "baseExpression": {
                          "id": 48,
                          "name": "hats",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 30,
                          "src": "593:4:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_uint256_$_t_struct$_Hat_$11_storage_$_$",
                            "typeString": "mapping(address => mapping(uint256 => struct Hats.Hat storage ref))"
                          }
                        },
                        "id": 52,
                        "indexExpression": {
                          "expression": {
                            "id": 49,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "598:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 50,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "598:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "593:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_Hat_$11_storage_$",
                          "typeString": "mapping(uint256 => struct Hats.Hat storage ref)"
                        }
                      },
                      "id": 53,
                      "indexExpression": {
                        "id": 51,
                        "name": "hatCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42,
                        "src": "610:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "593:26:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Hat_$11_storage",
                        "typeString": "struct Hats.Hat storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "id": 55,
                          "name": "hatCount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 42,
                          "src": "626:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 56,
                          "name": "_name",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 36,
                          "src": "636:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "id": 57,
                          "name": "_color",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 38,
                          "src": "644:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        ],
                        "id": 54,
                        "name": "Hat",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11,
                        "src": "622:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_Hat_$11_storage_ptr_$",
                          "typeString": "type(struct Hats.Hat storage pointer)"
                        }
                      },
                      "id": 58,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "622:29:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Hat_$11_memory_ptr",
                        "typeString": "struct Hats.Hat memory"
                      }
                    },
                    "src": "593:58:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_Hat_$11_storage",
                      "typeString": "struct Hats.Hat storage ref"
                    }
                  },
                  "id": 60,
                  "nodeType": "ExpressionStatement",
                  "src": "593:58:0"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 62,
                        "name": "hatCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 42,
                        "src": "678:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 63,
                        "name": "_name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 36,
                        "src": "688:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 64,
                        "name": "_color",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38,
                        "src": "695:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 61,
                      "name": "HatCreated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 19,
                      "src": "667:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,string memory,string memory)"
                      }
                    },
                    "id": 65,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "667:35:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 66,
                  "nodeType": "EmitStatement",
                  "src": "662:40:0"
                },
                {
                  "expression": {
                    "id": 71,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "713:23:0",
                    "subExpression": {
                      "baseExpression": {
                        "id": 67,
                        "name": "hatsCount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34,
                        "src": "713:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 70,
                      "indexExpression": {
                        "expression": {
                          "id": 68,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967281,
                          "src": "723:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 69,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "723:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "713:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 72,
                  "nodeType": "ExpressionStatement",
                  "src": "713:23:0"
                }
              ]
            },
            "functionSelector": "658445be",
            "id": 74,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "createHat",
            "nameLocation": "475:9:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 39,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36,
                  "mutability": "mutable",
                  "name": "_name",
                  "nameLocation": "499:5:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 74,
                  "src": "485:19:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 35,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "485:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 38,
                  "mutability": "mutable",
                  "name": "_color",
                  "nameLocation": "519:6:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 74,
                  "src": "505:20:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 37,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "505:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "484:42:0"
            },
            "returnParameters": {
              "id": 40,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "534:0:0"
            },
            "scope": 220,
            "src": "466:278:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 157,
              "nodeType": "Block",
              "src": "853:488:0",
              "statements": [
                {
                  "assignments": [
                    86
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 86,
                      "mutability": "mutable",
                      "name": "win",
                      "nameLocation": "869:3:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 157,
                      "src": "864:8:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 85,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "864:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 88,
                  "initialValue": {
                    "hexValue": "66616c7365",
                    "id": 87,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "875:5:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "false"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "864:16:0"
                },
                {
                  "expression": {
                    "id": 90,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "891:11:0",
                    "subExpression": {
                      "id": 89,
                      "name": "randNonce",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4,
                      "src": "891:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 91,
                  "nodeType": "ExpressionStatement",
                  "src": "891:11:0"
                },
                {
                  "assignments": [
                    93
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 93,
                      "mutability": "mutable",
                      "name": "randInt",
                      "nameLocation": "918:7:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 157,
                      "src": "914:11:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      },
                      "typeName": {
                        "id": 92,
                        "name": "int",
                        "nodeType": "ElementaryTypeName",
                        "src": "914:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 94,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "914:11:0"
                },
                {
                  "assignments": [
                    96
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 96,
                      "mutability": "mutable",
                      "name": "randomNumber",
                      "nameLocation": "941:12:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 157,
                      "src": "936:17:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 95,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "936:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 112,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 111,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "expression": {
                                    "id": 102,
                                    "name": "block",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 4294967292,
                                    "src": "988:5:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_block",
                                      "typeString": "block"
                                    }
                                  },
                                  "id": 103,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "timestamp",
                                  "nodeType": "MemberAccess",
                                  "src": "988:15:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                {
                                  "expression": {
                                    "id": 104,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 4294967281,
                                    "src": "1004:3:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 105,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "sender",
                                  "nodeType": "MemberAccess",
                                  "src": "1004:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "id": 106,
                                  "name": "randNonce",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4,
                                  "src": "1015:9:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "expression": {
                                  "id": 100,
                                  "name": "abi",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4294967295,
                                  "src": "971:3:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_abi",
                                    "typeString": "abi"
                                  }
                                },
                                "id": 101,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberName": "encodePacked",
                                "nodeType": "MemberAccess",
                                "src": "971:16:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                  "typeString": "function () pure returns (bytes memory)"
                                }
                              },
                              "id": 107,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "971:54:0",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "id": 99,
                            "name": "keccak256",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967288,
                            "src": "961:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory) pure returns (bytes32)"
                            }
                          },
                          "id": 108,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "961:65:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        ],
                        "id": 98,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "956:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": {
                          "id": 97,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "956:4:0",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 109,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "956:71:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "%",
                    "rightExpression": {
                      "hexValue": "313030",
                      "id": 110,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1030:3:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_100_by_1",
                        "typeString": "int_const 100"
                      },
                      "value": "100"
                    },
                    "src": "956:77:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "936:97:0"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 115,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 113,
                      "name": "randomNumber",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 96,
                      "src": "1047:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "hexValue": "3636",
                      "id": 114,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1063:2:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_66_by_1",
                        "typeString": "int_const 66"
                      },
                      "value": "66"
                    },
                    "src": "1047:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 120,
                  "nodeType": "IfStatement",
                  "src": "1044:34:0",
                  "trueBody": {
                    "expression": {
                      "id": 118,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 116,
                        "name": "randInt",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 93,
                        "src": "1067:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "hexValue": "33",
                        "id": 117,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1077:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_3_by_1",
                          "typeString": "int_const 3"
                        },
                        "value": "3"
                      },
                      "src": "1067:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 119,
                    "nodeType": "ExpressionStatement",
                    "src": "1067:11:0"
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 123,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 121,
                      "name": "randomNumber",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 96,
                      "src": "1093:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "hexValue": "3333",
                      "id": 122,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1108:2:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_33_by_1",
                        "typeString": "int_const 33"
                      },
                      "value": "33"
                    },
                    "src": "1093:17:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 128,
                  "nodeType": "IfStatement",
                  "src": "1090:33:0",
                  "trueBody": {
                    "expression": {
                      "id": 126,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 124,
                        "name": "randInt",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 93,
                        "src": "1112:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "hexValue": "31",
                        "id": 125,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1122:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "1112:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 127,
                    "nodeType": "ExpressionStatement",
                    "src": "1112:11:0"
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 131,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 129,
                      "name": "randomNumber",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 96,
                      "src": "1137:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "hexValue": "3636",
                      "id": 130,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1153:2:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_66_by_1",
                        "typeString": "int_const 66"
                      },
                      "value": "66"
                    },
                    "src": "1137:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 136,
                  "nodeType": "IfStatement",
                  "src": "1134:34:0",
                  "trueBody": {
                    "expression": {
                      "id": 134,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "id": 132,
                        "name": "randInt",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 93,
                        "src": "1157:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "hexValue": "33",
                        "id": 133,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1167:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_3_by_1",
                          "typeString": "int_const 3"
                        },
                        "value": "3"
                      },
                      "src": "1157:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "id": 135,
                    "nodeType": "ExpressionStatement",
                    "src": "1157:11:0"
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    },
                    "id": 139,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 137,
                      "name": "_position",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 76,
                      "src": "1184:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "id": 138,
                      "name": "randInt",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 93,
                      "src": "1197:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "1184:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 150,
                  "nodeType": "IfStatement",
                  "src": "1181:99:0",
                  "trueBody": {
                    "id": 149,
                    "nodeType": "Block",
                    "src": "1205:75:0",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "id": 141,
                              "name": "_name",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 80,
                              "src": "1230:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            },
                            {
                              "id": 142,
                              "name": "_color",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 78,
                              "src": "1236:6:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              },
                              {
                                "typeIdentifier": "t_string_memory_ptr",
                                "typeString": "string memory"
                              }
                            ],
                            "id": 140,
                            "name": "createHat",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 74,
                            "src": "1220:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                              "typeString": "function (string memory,string memory)"
                            }
                          },
                          "id": 143,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1220:23:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 144,
                        "nodeType": "ExpressionStatement",
                        "src": "1220:23:0"
                      },
                      {
                        "expression": {
                          "id": 147,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "id": 145,
                            "name": "win",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 86,
                            "src": "1258:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "hexValue": "74727565",
                            "id": 146,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "bool",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1264:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "value": "true"
                          },
                          "src": "1258:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 148,
                        "nodeType": "ExpressionStatement",
                        "src": "1258:10:0"
                      }
                    ]
                  }
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 152,
                        "name": "win",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 86,
                        "src": "1308:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 151,
                      "name": "StartLottery",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23,
                      "src": "1295:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bool_$returns$__$",
                        "typeString": "function (bool)"
                      }
                    },
                    "id": 153,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1295:17:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 154,
                  "nodeType": "EmitStatement",
                  "src": "1290:22:0"
                },
                {
                  "expression": {
                    "id": 155,
                    "name": "win",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 86,
                    "src": "1330:3:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 84,
                  "id": 156,
                  "nodeType": "Return",
                  "src": "1323:10:0"
                }
              ]
            },
            "functionSelector": "c22cecab",
            "id": 158,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "startLottery",
            "nameLocation": "761:12:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 81,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 76,
                  "mutability": "mutable",
                  "name": "_position",
                  "nameLocation": "778:9:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 158,
                  "src": "774:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 75,
                    "name": "int",
                    "nodeType": "ElementaryTypeName",
                    "src": "774:3:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 78,
                  "mutability": "mutable",
                  "name": "_color",
                  "nameLocation": "804:6:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 158,
                  "src": "790:20:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 77,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "790:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 80,
                  "mutability": "mutable",
                  "name": "_name",
                  "nameLocation": "825:5:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 158,
                  "src": "811:19:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 79,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "811:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "773:58:0"
            },
            "returnParameters": {
              "id": 84,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 83,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 158,
                  "src": "847:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 82,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "847:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "846:6:0"
            },
            "scope": 220,
            "src": "752:589:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 218,
              "nodeType": "Block",
              "src": "1402:318:0",
              "statements": [
                {
                  "expression": {
                    "id": 166,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "++",
                    "prefix": false,
                    "src": "1414:11:0",
                    "subExpression": {
                      "id": 165,
                      "name": "randNonce",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4,
                      "src": "1414:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 167,
                  "nodeType": "ExpressionStatement",
                  "src": "1414:11:0"
                },
                {
                  "assignments": [
                    169
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 169,
                      "mutability": "mutable",
                      "name": "randomNumber",
                      "nameLocation": "1443:12:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 218,
                      "src": "1438:17:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 168,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1438:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 185,
                  "initialValue": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 184,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "expression": {
                                    "id": 175,
                                    "name": "block",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 4294967292,
                                    "src": "1490:5:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_block",
                                      "typeString": "block"
                                    }
                                  },
                                  "id": 176,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "timestamp",
                                  "nodeType": "MemberAccess",
                                  "src": "1490:15:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                {
                                  "expression": {
                                    "id": 177,
                                    "name": "msg",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 4294967281,
                                    "src": "1506:3:0",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_magic_message",
                                      "typeString": "msg"
                                    }
                                  },
                                  "id": 178,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "sender",
                                  "nodeType": "MemberAccess",
                                  "src": "1506:10:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "id": 179,
                                  "name": "randNonce",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4,
                                  "src": "1517:9:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  },
                                  {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                ],
                                "expression": {
                                  "id": 173,
                                  "name": "abi",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 4294967295,
                                  "src": "1473:3:0",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_abi",
                                    "typeString": "abi"
                                  }
                                },
                                "id": 174,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberName": "encodePacked",
                                "nodeType": "MemberAccess",
                                "src": "1473:16:0",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                  "typeString": "function () pure returns (bytes memory)"
                                }
                              },
                              "id": 180,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1473:54:0",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes_memory_ptr",
                                "typeString": "bytes memory"
                              }
                            ],
                            "id": 172,
                            "name": "keccak256",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967288,
                            "src": "1463:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                              "typeString": "function (bytes memory) pure returns (bytes32)"
                            }
                          },
                          "id": 181,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1463:65:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        ],
                        "id": 171,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1458:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint256_$",
                          "typeString": "type(uint256)"
                        },
                        "typeName": {
                          "id": 170,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "1458:4:0",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 182,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1458:71:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "%",
                    "rightExpression": {
                      "id": 183,
                      "name": "_modulus",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 160,
                      "src": "1532:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1458:82:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1438:102:0"
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 188,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 186,
                      "name": "randomNumber",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 169,
                      "src": "1555:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "hexValue": "3636",
                      "id": 187,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1571:2:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_66_by_1",
                        "typeString": "int_const 66"
                      },
                      "value": "66"
                    },
                    "src": "1555:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 194,
                  "nodeType": "IfStatement",
                  "src": "1552:36:0",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "hexValue": "33",
                          "id": 191,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1586:1:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_3_by_1",
                            "typeString": "int_const 3"
                          },
                          "value": "3"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_3_by_1",
                            "typeString": "int_const 3"
                          }
                        ],
                        "id": 190,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1582:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": {
                          "id": 189,
                          "name": "int",
                          "nodeType": "ElementaryTypeName",
                          "src": "1582:3:0",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 192,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1582:6:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "functionReturnParameters": 164,
                    "id": 193,
                    "nodeType": "Return",
                    "src": "1575:13:0"
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 197,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 195,
                      "name": "randomNumber",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 169,
                      "src": "1603:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "hexValue": "3333",
                      "id": 196,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1618:2:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_33_by_1",
                        "typeString": "int_const 33"
                      },
                      "value": "33"
                    },
                    "src": "1603:17:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 203,
                  "nodeType": "IfStatement",
                  "src": "1600:35:0",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "hexValue": "31",
                          "id": 200,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1633:1:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          }
                        ],
                        "id": 199,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1629:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": {
                          "id": 198,
                          "name": "int",
                          "nodeType": "ElementaryTypeName",
                          "src": "1629:3:0",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 201,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1629:6:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "functionReturnParameters": 164,
                    "id": 202,
                    "nodeType": "Return",
                    "src": "1622:13:0"
                  }
                },
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 206,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "id": 204,
                      "name": "randomNumber",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 169,
                      "src": "1650:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": ">=",
                    "rightExpression": {
                      "hexValue": "3636",
                      "id": 205,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1666:2:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_66_by_1",
                        "typeString": "int_const 66"
                      },
                      "value": "66"
                    },
                    "src": "1650:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 212,
                  "nodeType": "IfStatement",
                  "src": "1647:36:0",
                  "trueBody": {
                    "expression": {
                      "arguments": [
                        {
                          "hexValue": "33",
                          "id": 209,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1681:1:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_3_by_1",
                            "typeString": "int_const 3"
                          },
                          "value": "3"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_3_by_1",
                            "typeString": "int_const 3"
                          }
                        ],
                        "id": 208,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "1677:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_int256_$",
                          "typeString": "type(int256)"
                        },
                        "typeName": {
                          "id": 207,
                          "name": "int",
                          "nodeType": "ElementaryTypeName",
                          "src": "1677:3:0",
                          "typeDescriptions": {}
                        }
                      },
                      "id": 210,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1677:6:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "functionReturnParameters": 164,
                    "id": 211,
                    "nodeType": "Return",
                    "src": "1670:13:0"
                  }
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "hexValue": "34",
                        "id": 215,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1706:1:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_4_by_1",
                          "typeString": "int_const 4"
                        },
                        "value": "4"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_4_by_1",
                          "typeString": "int_const 4"
                        }
                      ],
                      "id": 214,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "1702:3:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_int256_$",
                        "typeString": "type(int256)"
                      },
                      "typeName": {
                        "id": 213,
                        "name": "int",
                        "nodeType": "ElementaryTypeName",
                        "src": "1702:3:0",
                        "typeDescriptions": {}
                      }
                    },
                    "id": 216,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1702:6:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 164,
                  "id": 217,
                  "nodeType": "Return",
                  "src": "1695:13:0"
                }
              ]
            },
            "id": 219,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "randMod",
            "nameLocation": "1358:7:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 161,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 160,
                  "mutability": "mutable",
                  "name": "_modulus",
                  "nameLocation": "1371:8:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 219,
                  "src": "1366:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 159,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1366:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1365:15:0"
            },
            "returnParameters": {
              "id": 164,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 163,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 219,
                  "src": "1398:3:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 162,
                    "name": "int",
                    "nodeType": "ElementaryTypeName",
                    "src": "1398:3:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1397:5:0"
            },
            "scope": 220,
            "src": "1349:371:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "scope": 221,
        "src": "61:1664:0"
      }
    ],
    "src": "33:1692:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.3+commit.8d00100c.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {},
      "links": {},
      "address": "0x4dd51112eAE8Df27D8D90122eD9FcdaE2D812750",
      "transactionHash": "0x5c3cfabb188184534ea89e22f1827b4efd5a4c0ca73cd87b064f5919450cce0f"
    }
  },
  "schemaVersion": "3.4.10",
  "updatedAt": "2022-11-02T04:26:11.448Z",
  "networkType": "ethereum",
  "devdoc": {
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}