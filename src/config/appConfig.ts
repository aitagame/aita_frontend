const {
  REACT_APP_URL: baseUrl,
  REACT_APP_APP_NAME: appName,
  REACT_APP_API_URL: apiUrl,
  REACT_APP_NEAR_CONTRACT_REQUESTING_ACCESS: nearContractAccess,
  REACT_APP_NEAR_NFT_CONTRACT: nearNftContract,
  REACT_APP_NEAR_EXPLORER_URL: nearExplorerUrl,
  REACT_APP_NEAR_HELPER_URL: nearHelperUrl,
  REACT_APP_NEAR_NETWORK_ID: nearNetworkId,
  REACT_APP_NEAR_NODE_URL: nearNodeUrl,
  REACT_APP_NEAR_WALLET_URL: nearWalletUrl,
  REACT_APP_AITA_NEAR_NET: aitaNearNet,
} = process.env;

const getConfigValue = (value: string | undefined, defaultValue = ''): string =>
  value || defaultValue;

export const appConfig = {
  baseUrl: getConfigValue(baseUrl, 'http://localhost:3007'),
  apiUrl: getConfigValue(apiUrl),
  nearContractAccess: getConfigValue(nearContractAccess),
  nearNftContract: getConfigValue(nearNftContract),
  appName: getConfigValue(appName),
  nearExplorerUrl: getConfigValue(nearExplorerUrl),
  nearHelperUrl: getConfigValue(nearHelperUrl),
  nearNetworkId: getConfigValue(nearNetworkId),
  nearNodeUrl: getConfigValue(nearNodeUrl),
  nearWalletUrl: getConfigValue(nearWalletUrl),
  aitaNearNet: getConfigValue(aitaNearNet),
};
