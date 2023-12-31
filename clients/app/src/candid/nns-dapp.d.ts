import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface AccountDetails {
  principal: Principal;
  account_identifier: AccountIdentifier;
  hardware_wallet_accounts: Array<HardwareWalletAccountDetails>;
  sub_accounts: Array<SubAccountDetails>;
}
export type AccountIdentifier = string;
export interface AttachCanisterRequest {
  name: string;
  canister_id: Principal;
}
export type AttachCanisterResponse =
  | { Ok: null }
  | { CanisterAlreadyAttached: null }
  | { NameAlreadyTaken: null }
  | { NameTooLong: null }
  | { CanisterLimitExceeded: null };
export type BlockHeight = bigint;
export interface CanisterDetails {
  name: string;
  canister_id: Principal;
}
export type CanisterId = Principal;
export type CreateSubAccountResponse =
  | { Ok: SubAccountDetails }
  | { AccountNotFound: null }
  | { NameTooLong: null }
  | { SubAccountLimitExceeded: null };
export interface DetachCanisterRequest {
  canister_id: Principal;
}
export type DetachCanisterResponse = { Ok: null } | { CanisterNotFound: null };
export type GetAccountResponse = { Ok: AccountDetails } | { AccountNotFound: null };
export interface GetTransactionsRequest {
  page_size: number;
  offset: number;
  account_identifier: AccountIdentifier;
}
export interface GetTransactionsResponse {
  total: number;
  transactions: Array<Transaction>;
}
export interface HardwareWalletAccountDetails {
  principal: Principal;
  name: string;
  account_identifier: AccountIdentifier;
}
export type HeaderField = [string, string];
export interface HttpRequest {
  url: string;
  method: string;
  body: Array<number>;
  headers: Array<HeaderField>;
}
export interface HttpResponse {
  body: Array<number>;
  headers: Array<HeaderField>;
  status_code: number;
}
export interface ICPTs {
  e8s: bigint;
}
export type Memo = bigint;
export interface MultiPartTransactionError {
  error_message: string;
  block_height: BlockHeight;
}
export type MultiPartTransactionStatus =
  | { Queued: null }
  | { Error: string }
  | { Refunded: [BlockHeight, string] }
  | { CanisterCreated: CanisterId }
  | { Complete: null }
  | { NotFound: null }
  | { NeuronCreated: NeuronId }
  | { PendingSync: null }
  | { ErrorWithRefundPending: string };
export type NeuronId = bigint;
export interface Receive {
  fee: ICPTs;
  from: AccountIdentifier;
  amount: ICPTs;
}
export interface RegisterHardwareWalletRequest {
  principal: Principal;
  name: string;
}
export type RegisterHardwareWalletResponse =
  | { Ok: null }
  | { AccountNotFound: null }
  | { HardwareWalletAlreadyRegistered: null }
  | { HardwareWalletLimitExceeded: null }
  | { NameTooLong: null };
export interface RenameSubAccountRequest {
  new_name: string;
  account_identifier: AccountIdentifier;
}
export type RenameSubAccountResponse = { Ok: null } | { AccountNotFound: null } | { SubAccountNotFound: null } | { NameTooLong: null };
export interface Send {
  to: AccountIdentifier;
  fee: ICPTs;
  amount: ICPTs;
}
export interface Stats {
  latest_transaction_block_height: BlockHeight;
  seconds_since_last_ledger_sync: bigint;
  sub_accounts_count: bigint;
  neurons_topped_up_count: bigint;
  transactions_to_process_queue_length: number;
  neurons_created_count: bigint;
  hardware_wallet_accounts_count: bigint;
  accounts_count: bigint;
  earliest_transaction_block_height: BlockHeight;
  transactions_count: bigint;
  block_height_synced_up_to: [] | [bigint];
  latest_transaction_timestamp_nanos: bigint;
  earliest_transaction_timestamp_nanos: bigint;
}
export type SubAccount = Array<number>;
export interface SubAccountDetails {
  name: string;
  sub_account: SubAccount;
  account_identifier: AccountIdentifier;
}
export interface Timestamp {
  timestamp_nanos: bigint;
}
export interface Transaction {
  transaction_type: [] | [TransactionType];
  memo: bigint;
  timestamp: Timestamp;
  block_height: BlockHeight;
  transfer: Transfer;
}
export type TransactionType =
  | { Burn: null }
  | { Mint: null }
  | { Send: null }
  | { StakeNeuronNotification: null }
  | { TopUpCanister: CanisterId }
  | { CreateCanister: null }
  | { TopUpNeuron: null }
  | { StakeNeuron: null };
export type Transfer = { Burn: { amount: ICPTs } } | { Mint: { amount: ICPTs } } | { Send: Send } | { Receive: Receive };
export interface _SERVICE {
  add_account: ActorMethod<[], AccountIdentifier>;
  add_stable_asset: ActorMethod<[Array<number>], undefined>;
  attach_canister: ActorMethod<[AttachCanisterRequest], AttachCanisterResponse>;
  create_sub_account: ActorMethod<[string], CreateSubAccountResponse>;
  detach_canister: ActorMethod<[DetachCanisterRequest], DetachCanisterResponse>;
  get_account: ActorMethod<[], GetAccountResponse>;
  get_canisters: ActorMethod<[], Array<CanisterDetails>>;
  get_icp_to_cycles_conversion_rate: ActorMethod<[], bigint>;
  get_multi_part_transaction_errors: ActorMethod<[], Array<MultiPartTransactionError>>;
  get_multi_part_transaction_status: ActorMethod<[Principal, BlockHeight], MultiPartTransactionStatus>;
  get_stats: ActorMethod<[], Stats>;
  get_transactions: ActorMethod<[GetTransactionsRequest], GetTransactionsResponse>;
  http_request: ActorMethod<[HttpRequest], HttpResponse>;
  register_hardware_wallet: ActorMethod<[RegisterHardwareWalletRequest], RegisterHardwareWalletResponse>;
  rename_sub_account: ActorMethod<[RenameSubAccountRequest], RenameSubAccountResponse>;
}
