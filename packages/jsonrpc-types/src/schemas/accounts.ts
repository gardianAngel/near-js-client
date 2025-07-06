/**
 * Generated Zod schemas for NEAR Protocol JSON-RPC
 */

import { z } from 'zod';

export const AccessKeySchema = z.object({
  nonce: z.number(),
  permission: z.unknown()
});

export const AccessKeyCreationConfigViewSchema = z.object({
  fullaccesscost: z.unknown().optional(),
  functioncallcost: z.unknown().optional(),
  functioncallcostperbyte: z.unknown().optional()
});

export const AccessKeyInfoViewSchema = z.object({
  accesskey: z.unknown().optional(),
  publickey: z.unknown().optional()
});

export const AccessKeyListSchema = z.object({
  keys: z.array(z.unknown())
});

export const AccessKeyPermissionSchema = z.union([z.object({
  functionCall: z.unknown().optional()
}), z.enum(['FullAccess'])]);

export const AccessKeyPermissionViewSchema = z.union([z.enum(['FullAccess']), z.object({
  functionCall: z.object({
  allowance: z.string().optional(),
  methodnames: z.array(z.string()).optional(),
  receiverid: z.string().optional()
}).optional()
})]);

export const AccessKeyViewSchema = z.object({
  nonce: z.number(),
  permission: z.unknown()
});

export const AccountCreationConfigViewSchema = z.object({
  minallowedtoplevelaccountlength: z.number().optional(),
  registraraccountid: z.unknown().optional()
});

export const AccountDataViewSchema = z.object({
  accountkey: z.unknown().optional(),
  peerid: z.unknown().optional(),
  proxies: z.array(z.unknown()),
  timestamp: z.string()
});

export const AccountIdSchema = z.string();

export const AccountIdValidityRulesVersionSchema = z.number();

export const AccountInfoSchema = z.object({
  accountid: z.unknown().optional(),
  amount: z.string(),
  publickey: z.unknown().optional()
});

export const AccountViewSchema = z.object({
  amount: z.string(),
  codehash: z.unknown().optional(),
  globalcontractaccountid: z.unknown().optional(),
  globalcontracthash: z.unknown().optional(),
  locked: z.string(),
  storagepaidat: z.number().optional(),
  storageusage: z.number().optional()
});

export const AccountWithPublicKeySchema = z.object({
  accountid: z.unknown().optional(),
  publickey: z.unknown().optional()
});

export const ContractCodeViewSchema = z.object({
  codebase64: z.string().optional(),
  hash: z.unknown()
});

export const GasKeyViewSchema = z.object({
  balance: z.number(),
  numnonces: z.number().optional(),
  permission: z.unknown()
});

export const GlobalContractDeployModeSchema = z.union([z.enum(['CodeHash']), z.enum(['AccountId'])]);

export const GlobalContractIdentifierSchema = z.union([z.object({
  codeHash: z.unknown().optional()
}), z.object({
  accountId: z.unknown().optional()
})]);

export const InvalidAccessKeyErrorSchema = z.union([z.object({
  accessKeyNotFound: z.object({
  accountid: z.unknown().optional(),
  publickey: z.unknown().optional()
}).optional()
}), z.object({
  receiverMismatch: z.object({
  akreceiver: z.string().optional(),
  txreceiver: z.unknown().optional()
}).optional()
}), z.object({
  methodNameMismatch: z.object({
  methodname: z.string().optional()
}).optional()
}), z.enum(['RequiresFullAccess']), z.object({
  notEnoughAllowance: z.object({
  accountid: z.unknown().optional(),
  allowance: z.string(),
  cost: z.string(),
  publickey: z.unknown().optional()
}).optional()
}), z.enum(['DepositWithFunctionCall'])]);

export const PublicKeySchema = z.string();

export const StateChangeCauseViewSchema = z.union([z.object({
  type: z.enum(['not_writable_to_disk'])
}), z.object({
  type: z.enum(['initial_state'])
}), z.object({
  txhash: z.unknown().optional(),
  type: z.enum(['transaction_processing'])
}), z.object({
  receipthash: z.unknown().optional(),
  type: z.enum(['action_receipt_processing_started'])
}), z.object({
  receipthash: z.unknown().optional(),
  type: z.enum(['action_receipt_gas_reward'])
}), z.object({
  receipthash: z.unknown().optional(),
  type: z.enum(['receipt_processing'])
}), z.object({
  receipthash: z.unknown().optional(),
  type: z.enum(['postponed_receipt'])
}), z.object({
  type: z.enum(['updated_delayed_receipts'])
}), z.object({
  type: z.enum(['validator_accounts_update'])
}), z.object({
  type: z.enum(['migration'])
}), z.object({
  type: z.enum(['bandwidth_scheduler_state_update'])
})]);

export const StateChangeKindViewSchema = z.union([z.object({
  accountid: z.unknown().optional(),
  type: z.enum(['account_touched'])
}), z.object({
  accountid: z.unknown().optional(),
  type: z.enum(['access_key_touched'])
}), z.object({
  accountid: z.unknown().optional(),
  type: z.enum(['data_touched'])
}), z.object({
  accountid: z.unknown().optional(),
  type: z.enum(['contract_code_touched'])
})]);

export const StateChangeWithCauseViewSchema = z.object({
  cause: z.unknown()
});

export const StateItemSchema = z.object({
  key: z.string(),
  value: z.string()
});

export const StateSyncConfigSchema = z.object({
  dump: z.unknown().optional(),
  sync: z.unknown().optional()
});

export const ViewStateResultSchema = z.object({
  proof: z.array(z.string()).optional(),
  values: z.array(z.unknown())
});
