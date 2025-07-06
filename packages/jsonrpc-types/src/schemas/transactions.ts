/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC
 */

import { z } from 'zod';

export const ActionSchema = z.union([z.object({
  createAccount: z.unknown().optional()
}), z.object({
  deployContract: z.unknown().optional()
}), z.object({
  functionCall: z.unknown().optional()
}), z.object({
  transfer: z.unknown().optional()
}), z.object({
  stake: z.unknown().optional()
}), z.object({
  addKey: z.unknown().optional()
}), z.object({
  deleteKey: z.unknown().optional()
}), z.object({
  deleteAccount: z.unknown().optional()
}), z.object({
  delegate: z.unknown().optional()
}), z.object({
  deployGlobalContract: z.unknown().optional()
}), z.object({
  useGlobalContract: z.unknown().optional()
})]);

export const ActionCreationConfigViewSchema = z.object({
  addkeycost: z.unknown().optional(),
  createaccountcost: z.unknown().optional(),
  delegatecost: z.unknown().optional(),
  deleteaccountcost: z.unknown().optional(),
  deletekeycost: z.unknown().optional(),
  deploycontractcost: z.unknown().optional(),
  deploycontractcostperbyte: z.unknown().optional(),
  functioncallcost: z.unknown().optional(),
  functioncallcostperbyte: z.unknown().optional(),
  stakecost: z.unknown().optional(),
  transfercost: z.unknown().optional()
});

export const ActionErrorSchema = z.object({
  index: z.number().optional(),
  kind: z.unknown()
});

export const ActionErrorKindSchema = z.union([z.object({
  accountAlreadyExists: z.object({
  accountid: z.unknown().optional()
}).optional()
}), z.object({
  accountDoesNotExist: z.object({
  accountid: z.unknown().optional()
}).optional()
}), z.object({
  createAccountOnlyByRegistrar: z.object({
  accountid: z.unknown().optional(),
  predecessorid: z.unknown().optional(),
  registraraccountid: z.unknown().optional()
}).optional()
}), z.object({
  createAccountNotAllowed: z.object({
  accountid: z.unknown().optional(),
  predecessorid: z.unknown().optional()
}).optional()
}), z.object({
  actorNoPermission: z.object({
  accountid: z.unknown().optional(),
  actorid: z.unknown().optional()
}).optional()
}), z.object({
  deleteKeyDoesNotExist: z.object({
  accountid: z.unknown().optional(),
  publickey: z.unknown().optional()
}).optional()
}), z.object({
  addKeyAlreadyExists: z.object({
  accountid: z.unknown().optional(),
  publickey: z.unknown().optional()
}).optional()
}), z.object({
  deleteAccountStaking: z.object({
  accountid: z.unknown().optional()
}).optional()
}), z.object({
  lackBalanceForState: z.object({
  accountid: z.unknown().optional(),
  amount: z.string()
}).optional()
}), z.object({
  triesToUnstake: z.object({
  accountid: z.unknown().optional()
}).optional()
}), z.object({
  triesToStake: z.object({
  accountid: z.unknown().optional(),
  balance: z.string(),
  locked: z.string(),
  stake: z.string()
}).optional()
}), z.object({
  insufficientStake: z.object({
  accountid: z.unknown().optional(),
  minimumstake: z.string().optional(),
  stake: z.string()
}).optional()
}), z.object({
  functionCallError: z.unknown().optional()
}), z.object({
  newReceiptValidationError: z.unknown().optional()
}), z.object({
  onlyImplicitAccountCreationAllowed: z.object({
  accountid: z.unknown().optional()
}).optional()
}), z.object({
  deleteAccountWithLargeState: z.object({
  accountid: z.unknown().optional()
}).optional()
}), z.enum(['DelegateActionInvalidSignature']), z.object({
  delegateActionSenderDoesNotMatchTxReceiver: z.object({
  receiverid: z.unknown().optional(),
  senderid: z.unknown().optional()
}).optional()
}), z.enum(['DelegateActionExpired']), z.object({
  delegateActionAccessKeyError: z.unknown().optional()
}), z.object({
  delegateActionInvalidNonce: z.object({
  aknonce: z.number().optional(),
  delegatenonce: z.number().optional()
}).optional()
}), z.object({
  delegateActionNonceTooLarge: z.object({
  delegatenonce: z.number().optional(),
  upperbound: z.number().optional()
}).optional()
}), z.object({
  globalContractDoesNotExist: z.object({
  identifier: z.unknown()
}).optional()
})]);

export const ActionViewSchema = z.union([z.enum(['CreateAccount']), z.object({
  deployContract: z.object({
  code: z.string()
}).optional()
}), z.object({
  functionCall: z.object({
  args: z.string(),
  deposit: z.string(),
  gas: z.number(),
  methodname: z.string().optional()
}).optional()
}), z.object({
  transfer: z.object({
  deposit: z.string()
}).optional()
}), z.object({
  stake: z.object({
  publickey: z.unknown().optional(),
  stake: z.string()
}).optional()
}), z.object({
  addKey: z.object({
  accesskey: z.unknown().optional(),
  publickey: z.unknown().optional()
}).optional()
}), z.object({
  deleteKey: z.object({
  publickey: z.unknown().optional()
}).optional()
}), z.object({
  deleteAccount: z.object({
  beneficiaryid: z.unknown().optional()
}).optional()
}), z.object({
  delegate: z.object({
  delegateaction: z.unknown().optional(),
  signature: z.unknown()
}).optional()
}), z.object({
  deployGlobalContract: z.object({
  code: z.string()
}).optional()
}), z.object({
  deployGlobalContractByAccountId: z.object({
  code: z.string()
}).optional()
}), z.object({
  useGlobalContract: z.object({
  codehash: z.unknown().optional()
}).optional()
}), z.object({
  useGlobalContractByAccountId: z.object({
  accountid: z.unknown().optional()
}).optional()
})]);

export const ActionsValidationErrorSchema = z.union([z.enum(['DeleteActionMustBeFinal']), z.object({
  totalPrepaidGasExceeded: z.object({
  limit: z.number(),
  totalprepaidgas: z.number().optional()
}).optional()
}), z.object({
  totalNumberOfActionsExceeded: z.object({
  limit: z.number(),
  totalnumberofactions: z.number().optional()
}).optional()
}), z.object({
  addKeyMethodNamesNumberOfBytesExceeded: z.object({
  limit: z.number(),
  totalnumberofbytes: z.number().optional()
}).optional()
}), z.object({
  addKeyMethodNameLengthExceeded: z.object({
  length: z.number(),
  limit: z.number()
}).optional()
}), z.enum(['IntegerOverflow']), z.object({
  invalidAccountId: z.object({
  accountid: z.string().optional()
}).optional()
}), z.object({
  contractSizeExceeded: z.object({
  limit: z.number(),
  size: z.number()
}).optional()
}), z.object({
  functionCallMethodNameLengthExceeded: z.object({
  length: z.number(),
  limit: z.number()
}).optional()
}), z.object({
  functionCallArgumentsLengthExceeded: z.object({
  length: z.number(),
  limit: z.number()
}).optional()
}), z.object({
  unsuitableStakingKey: z.object({
  publickey: z.unknown().optional()
}).optional()
}), z.enum(['FunctionCallZeroAttachedGas']), z.enum(['DelegateActionMustBeOnlyOne']), z.object({
  unsupportedProtocolFeature: z.object({
  protocolfeature: z.string().optional(),
  version: z.number()
}).optional()
})]);

export const AddKeyActionSchema = z.object({
  accesskey: z.unknown().optional(),
  publickey: z.unknown().optional()
});

export const CreateAccountActionSchema = z.record(z.unknown());

export const DataReceiptCreationConfigViewSchema = z.object({
  basecost: z.unknown().optional(),
  costperbyte: z.unknown().optional()
});

export const DelegateActionSchema = z.object({
  actions: z.array(z.unknown()),
  maxblockheight: z.number().optional(),
  nonce: z.number(),
  publickey: z.unknown().optional(),
  receiverid: z.unknown().optional(),
  senderid: z.unknown().optional()
});

export const DeleteAccountActionSchema = z.object({
  beneficiaryid: z.unknown().optional()
});

export const DeleteKeyActionSchema = z.object({
  publickey: z.unknown().optional()
});

export const DeployContractActionSchema = z.object({
  code: z.string()
});

export const DeployGlobalContractActionSchema = z.object({
  code: z.string(),
  deploymode: z.unknown().optional()
});

export const FinalExecutionOutcomeWithReceiptViewSchema = z.object({
  receipts: z.array(z.unknown()),
  receiptsoutcome: z.array(z.unknown()).optional(),
  status: z.unknown(),
  transaction: z.unknown(),
  transactionoutcome: z.unknown().optional()
});

export const FunctionCallActionSchema = z.object({
  args: z.string(),
  deposit: z.string(),
  gas: z.number(),
  methodname: z.string().optional()
});

export const InvalidTxErrorSchema = z.union([z.object({
  invalidAccessKeyError: z.unknown().optional()
}), z.object({
  invalidSignerId: z.object({
  signerid: z.string().optional()
}).optional()
}), z.object({
  signerDoesNotExist: z.object({
  signerid: z.unknown().optional()
}).optional()
}), z.object({
  invalidNonce: z.object({
  aknonce: z.number().optional(),
  txnonce: z.number().optional()
}).optional()
}), z.object({
  nonceTooLarge: z.object({
  txnonce: z.number().optional(),
  upperbound: z.number().optional()
}).optional()
}), z.object({
  invalidReceiverId: z.object({
  receiverid: z.string().optional()
}).optional()
}), z.enum(['InvalidSignature']), z.object({
  notEnoughBalance: z.object({
  balance: z.string(),
  cost: z.string(),
  signerid: z.unknown().optional()
}).optional()
}), z.object({
  lackBalanceForState: z.object({
  amount: z.string(),
  signerid: z.unknown().optional()
}).optional()
}), z.enum(['CostOverflow']), z.enum(['InvalidChain']), z.enum(['Expired']), z.object({
  actionsValidation: z.unknown().optional()
}), z.object({
  transactionSizeExceeded: z.object({
  limit: z.number(),
  size: z.number()
}).optional()
}), z.enum(['InvalidTransactionVersion']), z.object({
  storageError: z.unknown().optional()
}), z.object({
  shardCongested: z.object({
  congestionlevel: z.number().optional(),
  shardid: z.number().optional()
}).optional()
}), z.object({
  shardStuck: z.object({
  missedchunks: z.number().optional(),
  shardid: z.number().optional()
}).optional()
})]);

export const JsonRpcRequestforEXPERIMENTALreceiptSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['EXPERIMENTAL_receipt']),
  params: z.unknown()
});

export const JsonRpcRequestforEXPERIMENTALtxstatusSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['EXPERIMENTAL_tx_status']),
  params: z.unknown()
});

export const JsonRpcRequestforbroadcasttxasyncSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['broadcast_tx_async']),
  params: z.unknown()
});

export const JsonRpcRequestforbroadcasttxcommitSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['broadcast_tx_commit']),
  params: z.unknown()
});

export const JsonRpcRequestforsendtxSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['send_tx']),
  params: z.unknown()
});

export const JsonRpcRequestfortxSchema = z.object({
  id: z.string(),
  jsonrpc: z.string(),
  method: z.enum(['tx']),
  params: z.unknown()
});

export const JsonRpcResponseforRpcReceiptResponseandRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const JsonRpcResponseforRpcTransactionResponseandRpcErrorSchema = z.object({
  id: z.string(),
  jsonrpc: z.string()
});

export const NonDelegateActionSchema = z.unknown();

export const ReceiptEnumViewSchema = z.union([z.object({
  action: z.object({
  actions: z.array(z.unknown()),
  gasprice: z.string().optional(),
  inputdataids: z.array(z.unknown()).optional(),
  ispromiseyield: z.boolean().optional(),
  outputdatareceivers: z.array(z.unknown()).optional(),
  signerid: z.unknown().optional(),
  signerpublickey: z.unknown().optional()
}).optional()
}), z.object({
  data: z.object({
  data: z.string().optional(),
  dataid: z.unknown().optional(),
  ispromiseresume: z.boolean().optional()
}).optional()
}), z.object({
  globalContractDistribution: z.object({
  alreadydeliveredshards: z.array(z.unknown()).optional(),
  code: z.string(),
  id: z.unknown(),
  targetshard: z.unknown().optional()
}).optional()
})]);

export const ReceiptValidationErrorSchema = z.union([z.object({
  invalidPredecessorId: z.object({
  accountid: z.string().optional()
}).optional()
}), z.object({
  invalidReceiverId: z.object({
  accountid: z.string().optional()
}).optional()
}), z.object({
  invalidSignerId: z.object({
  accountid: z.string().optional()
}).optional()
}), z.object({
  invalidDataReceiverId: z.object({
  accountid: z.string().optional()
}).optional()
}), z.object({
  returnedValueLengthExceeded: z.object({
  length: z.number(),
  limit: z.number()
}).optional()
}), z.object({
  numberInputDataDependenciesExceeded: z.object({
  limit: z.number(),
  numberofinputdatadependencies: z.number().optional()
}).optional()
}), z.object({
  actionsValidation: z.unknown().optional()
}), z.object({
  receiptSizeExceeded: z.object({
  limit: z.number(),
  size: z.number()
}).optional()
})]);

export const ReceiptViewSchema = z.object({
  predecessorid: z.unknown().optional(),
  priority: z.number().optional(),
  receipt: z.unknown(),
  receiptid: z.unknown().optional(),
  receiverid: z.unknown().optional()
});

export const RpcReceiptRequestSchema = z.object({
  receiptid: z.unknown().optional()
});

export const RpcReceiptResponseSchema = z.object({
  predecessorid: z.unknown().optional(),
  priority: z.number().optional(),
  receipt: z.unknown(),
  receiptid: z.unknown().optional(),
  receiverid: z.unknown().optional()
});

export const RpcSendTransactionRequestSchema = z.object({
  signedtxbase64: z.unknown().optional(),
  waituntil: z.unknown().optional()
});

export const RpcTransactionResponseSchema = z.object({
  finalexecutionstatus: z.unknown().optional()
});

export const RpcTransactionStatusRequestSchema = z.object({
  waituntil: z.unknown().optional()
});

export const SignedDelegateActionSchema = z.object({
  delegateaction: z.unknown().optional(),
  signature: z.unknown()
});

export const SignedTransactionSchema = z.string();

export const SignedTransactionViewSchema = z.object({
  actions: z.array(z.unknown()),
  hash: z.unknown(),
  nonce: z.number(),
  priorityfee: z.number().optional(),
  publickey: z.unknown().optional(),
  receiverid: z.unknown().optional(),
  signature: z.unknown(),
  signerid: z.unknown().optional()
});

export const StakeActionSchema = z.object({
  publickey: z.unknown().optional(),
  stake: z.string()
});

export const TransferActionSchema = z.object({
  deposit: z.string()
});

export const TxExecutionErrorSchema = z.union([z.object({
  actionError: z.unknown().optional()
}), z.object({
  invalidTxError: z.unknown().optional()
})]);

export const TxExecutionStatusSchema = z.union([z.enum(['NONE']), z.enum(['INCLUDED']), z.enum(['EXECUTED_OPTIMISTIC']), z.enum(['INCLUDED_FINAL']), z.enum(['EXECUTED']), z.enum(['FINAL'])]);

export const UseGlobalContractActionSchema = z.object({
  contractidentifier: z.unknown().optional()
});
