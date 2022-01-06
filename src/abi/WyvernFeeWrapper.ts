import { PartialReadonlyContractAbi } from "../types";

export const WyvernFeeWrapper: PartialReadonlyContractAbi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_exchange",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_serverSignerAddresses",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AddressIsZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "ExactPaymentFeeAmountNotTransferred",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "FailedToTransferFees",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "buyerFeeRecipient",
        type: "address",
      },
      {
        internalType: "address",
        name: "sellerFeeRecipient",
        type: "address",
      },
    ],
    name: "InvalidFeeRecipient",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidServerSignature",
    type: "error",
  },
  {
    inputs: [],
    name: "MoreThanTwoServerSignerAddresses",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInWrapperTransaction",
    type: "error",
  },
  {
    inputs: [],
    name: "WyvernAtomicMatchFailed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address[14]",
            name: "addrs",
            type: "address[14]",
          },
          {
            internalType: "uint256[18]",
            name: "uints",
            type: "uint256[18]",
          },
          {
            internalType: "uint8[8]",
            name: "feeMethodsSidesKindsHowToCalls",
            type: "uint8[8]",
          },
          {
            internalType: "bytes",
            name: "calldataBuy",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "calldataSell",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "replacementPatternBuy",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "replacementPatternSell",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "staticExtradataBuy",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "staticExtradataSell",
            type: "bytes",
          },
          {
            internalType: "uint8[2]",
            name: "vs",
            type: "uint8[2]",
          },
          {
            internalType: "bytes32[5]",
            name: "rssMetadata",
            type: "bytes32[5]",
          },
        ],
        internalType: "struct WyvernFeeWrapper.WyvernAtomicMatchParams",
        name: "_params",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "_serverSignerSignature",
        type: "bytes",
      },
      {
        components: [
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "paymentTokenAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "basisPoints",
            type: "uint256",
          },
        ],
        internalType: "struct LibFeeData.FeeData[]",
        name: "_feeData",
        type: "tuple[]",
      },
      {
        internalType: "enum Order.Side",
        name: "serverSignedOrderSide",
        type: "uint8",
      },
    ],
    name: "atomicMatch_",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "exchange",
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
    inputs: [],
    name: "expectInTransaction",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getServerSignerAddresses",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "serverSignerAddresses",
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
        name: "_exchange",
        type: "address",
      },
    ],
    name: "setExchange",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_serverSignerAddresses",
        type: "address[]",
      },
    ],
    name: "setServerSignerAddresses",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];
