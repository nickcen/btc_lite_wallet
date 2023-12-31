import fs from 'fs';
import path from 'path';
import crypto, { BinaryLike } from 'crypto';
import { ActorSubclass } from '@dfinity/agent';
import { getActor, getCanisterId, identity } from '@ego-js/utils';
import { idlFactory as deployerIDL } from '../idls/ego_deployer.idl';
import { _SERVICE as deployerService } from '../idls/ego_deployer';

describe('card_provider', () => {
  it('release card_provider to ego deployer', async () => {
    const dapp_name = 'card_provider';
    const dapp_wasm = fs.readFileSync(path.resolve(`${[process.cwd()]}` + `/artifacts/${dapp_name}/${dapp_name}_opt.wasm.gz`));

    await admin_app_create(dapp_name, dapp_wasm);
  });
});

describe('card_controller', () => {
  it('release card_controller to ego deployer', async () => {
    const dapp_name = 'card_controller';
    const dapp_wasm = fs.readFileSync(path.resolve(`${[process.cwd()]}` + `/artifacts/${dapp_name}/${dapp_name}_opt.wasm.gz`));

    await admin_app_create(dapp_name, dapp_wasm);
  });
});

describe('btc_wallet', () => {
  it('release btc_wallet to ego deployer', async () => {
    const dapp_name = 'btc_wallet';
    const dapp_wasm = fs.readFileSync(path.resolve(`${[process.cwd()]}` + `/artifacts/${dapp_name}/${dapp_name}_opt.wasm.gz`));

    await admin_app_create(dapp_name, dapp_wasm);
  });
});

async function getDeployer<T>(canisterName: string): Promise<ActorSubclass<T>> {
  const principal_id = getCanisterId(canisterName)!;

  console.log(`principal_id is ${principal_id}`);

  const operator = await getActor<T>(identity(), deployerIDL, principal_id);
  return operator;
}

const admin_app_create = async (app_id: string, backend_data: ArrayLike<number>) => {
  const deployer = await getDeployer<deployerService>('ego_deployer');

  const backend_data_hash = crypto
    .createHash('md5')
    .update(backend_data as BinaryLike)
    .digest('hex');

  const resp1 = await deployer.admin_app_create({
    app_id,
    backend_data: Array.from(new Uint8Array(backend_data)),
    backend_data_hash,
  });
  console.log(resp1);
};
