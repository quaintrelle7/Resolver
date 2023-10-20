
export const addressList = [
  {
    chainId: 80001,
    address: "0x3AbBD5F11636360E2d8eBef883521E1DC39aA76a",
  },
];

export const abi = [
  {
    inputs: [],
    name: "NotAuthorised",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "currWallet",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "firDel",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "secDel",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "thirDel",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "fourDel",
        type: "address",
      },
    ],
    name: "RegistryCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "currWallet",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "delegateVoter",
        type: "address",
      },
    ],
    name: "Voted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldWallet",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newWallet",
        type: "address",
      },
    ],
    name: "WalletMapped",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "currWallet",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "firDel",
            type: "address",
          },
          {
            internalType: "address",
            name: "secDel",
            type: "address",
          },
          {
            internalType: "address",
            name: "thirDel",
            type: "address",
          },
          {
            internalType: "address",
            name: "fourDel",
            type: "address",
          },
        ],
        internalType: "struct Registry.Registery",
        name: "delegates",
        type: "tuple",
      },
    ],
    name: "createNewRegistry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "forWallet",
        type: "address",
      },
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
    ],
    name: "deleGateVote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "delegateVoteCount",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "register",
    outputs: [
      {
        internalType: "address",
        name: "firDel",
        type: "address",
      },
      {
        internalType: "address",
        name: "secDel",
        type: "address",
      },
      {
        internalType: "address",
        name: "thirDel",
        type: "address",
      },
      {
        internalType: "address",
        name: "fourDel",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "currWallet",
        type: "address",
      },
    ],
    name: "resolver",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "oldWallet",
        type: "address",
      },
      {
        internalType: "address",
        name: "newWallet",
        type: "address",
      },
    ],
    name: "updateOldToNew",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "currWallet",
        type: "address",
      },
    ],
    name: "voteValidation",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "walletStatusOldToNew",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

// export async function callRegistry(method, args, provider) {
//   // const chainId = await provider
//   //   .getNetwork()
//   //   .then((network) => Number(network.chainId));
//   // const addressFromList = addressList.find(
//   //   (address) => address.chainId === chainId
//   // )?.address;
//   const contract = new ethers.Contract(
//     "0x3AbBD5F11636360E2d8eBef883521E1DC39aA76a",
//     abi,
//     provider
//   );
//   const data = await contract[method](...args);
//   return data;
// }
