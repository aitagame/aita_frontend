import { keyStores, connect, ConnectConfig, WalletConnection, Contract } from 'near-api-js';
import { appConfig } from 'config/appConfig';
import { useMemo } from 'react';
import { ContractMethods } from 'near-api-js/lib/contract';
const keyStore = new keyStores.BrowserLocalStorageKeyStore();

interface NearConfig extends ConnectConfig {
  explorerUrl: string;
}

const nearConfig: NearConfig = {
  networkId: appConfig.nearNetworkId,
  keyStore,
  nodeUrl: appConfig.nearNodeUrl,
  walletUrl: appConfig.nearWalletUrl,
  helperUrl: appConfig.nearHelperUrl,
  explorerUrl: appConfig.nearExplorerUrl,
  headers: {},
};

let wallet: WalletConnection;
let contract: Contract;
let nftContract: Contract;

const connectNear = async () => {
  const near = await connect(nearConfig);
  wallet = new WalletConnection(near, '');
  contract = new Contract(wallet.account(), appConfig.nearContractAccess, {
    viewMethods: ['hello'],
    changeMethods: [],
    sender: wallet.account(),
  } as ContractMethods);
  nftContract = new Contract(wallet.account(), appConfig.nearNftContract, {
    viewMethods: ['nft_tokens_for_owner'],
    changeMethods: ['nft_mint', 'nft_mint_purchase'],
    sender: wallet.account(),
  } as ContractMethods);
};

const signIn = () => {
  wallet.requestSignIn(
    appConfig.nearContractAccess,
    appConfig.appName,
    `${appConfig.baseUrl}/login`,
    `${appConfig.baseUrl}/login`
  );
};

const signOut = () => {
  wallet.signOut();
};

export const useNear = () => {
  return useMemo(
    () => ({
      connect: connectNear,
      signIn,
      contract,
      nftContract,
      wallet,
      signOut,
    }),
    []
  );
};
