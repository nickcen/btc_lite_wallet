import { FeeSummary, InscriptionSummary, Inscription, UTXO, TxHistoryItem, AppSummary, BitcoinBalance, SatsDomainResponse } from '../constant/types';

import { HttpAgentOptions, HttpClient, API_STATUS } from './http';

export class HttpService {
  private httpClient: HttpClient;

  private options: HttpAgentOptions;
  constructor(options: HttpAgentOptions = {}) {
    this.httpClient = new HttpClient(options);

    this.options = options;
  }

  async getWalletConfig(): Promise<any> {
    const data = await this.httpClient.httpGet('/v1/wallet/config', {});
    if (data.status == API_STATUS.FAILED) {
      throw new Error(data.message);
    }
    return data.result;
  }

  async getAddressBalance(address: string): Promise<BitcoinBalance> {
    const data = await this.httpClient.httpGet('/v2/address/balance', {
      address,
    });
    if (data.status == API_STATUS.FAILED) {
      throw new Error(data.message);
    }
    return data.result as BitcoinBalance;
  }

  async getMultiAddressBalance(addresses: string): Promise<BitcoinBalance[]> {
    const data = await this.httpClient.httpGet('/v2/address/multi-balance', {
      addresses,
    });
    if (data.status == API_STATUS.FAILED) {
      throw new Error(data.message);
    }
    return data.result as BitcoinBalance[];
  }

  async getAddressUtxo(address: string): Promise<UTXO[]> {
    const data = await this.httpClient.httpGet('/v2/address/utxo', {
      address,
    });
    if (data.status == API_STATUS.FAILED) {
      throw new Error(data.message);
    }
    return data.result as UTXO[];
  }

  async getAddressInscriptions(address: string): Promise<Inscription[]> {
    const data = await this.httpClient.httpGet('/v2/address/inscriptions', {
      address,
    });
    if (data.status == API_STATUS.FAILED) {
      throw new Error(data.message);
    }
    return data.result as Inscription[];
  }

  async getAddressRecentHistory(address: string): Promise<TxHistoryItem[]> {
    const data = await this.httpClient.httpGet('/v1/address/recent-history', {
      address,
    });
    if (data.status == API_STATUS.FAILED) {
      throw new Error(data.message);
    }
    return data.result as TxHistoryItem[];
  }

  async getInscriptionSummary(): Promise<InscriptionSummary> {
    const data = await this.httpClient.httpGet('/v1/inscription-summary', {});
    if (data.status == API_STATUS.FAILED) {
      throw new Error(data.message);
    }
    return data.result as InscriptionSummary;
  }

  async getAppSummary(): Promise<AppSummary> {
    const data = await this.httpClient.httpGet('/v1/app-summary', {});
    if (data.status == API_STATUS.FAILED) {
      throw new Error(data.message);
    }
    return data.result as AppSummary;
  }

  async pushTx(rawtx: string): Promise<string> {
    const data = await this.httpClient.httpPost('/v1/tx/broadcast', {
      rawtx,
    });
    if (data.status == API_STATUS.FAILED) {
      throw new Error(data.message);
    }
    return data.result as string;
  }

  async getFeeSummary(): Promise<FeeSummary> {
    const data = await this.httpClient.httpGet('/v1/fee-summary', {});
    if (data.status == API_STATUS.FAILED) {
      throw new Error(data.message);
    }
    return data.result as FeeSummary;
  }

  async getDomainInfo(domain: string) {
    const data = await this.httpClient.httpGet('/v1/address/search', { domain });
    if (data.status == API_STATUS.FAILED) {
      throw new Error(data.message);
    }
    return data.result;
  }

  async getSatsDomainInfo(domain: string) {
    const data = await this.httpClient.httpGet(
      `/names/${domain}`,
      {},
      { headers: { 'Content-Type': 'application/json;charset=utf-8' }, host: 'https://api.sats.id' },
    );
    if ((data as any).code == 404) {
      throw new Error((data as any).error);
    }

    return data as unknown as SatsDomainResponse;
  }
}
