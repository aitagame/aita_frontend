/* eslint-disable @typescript-eslint/no-empty-interface */
interface BasicAuth {
  accountId?: string;
}

export interface MetamaskAuth extends BasicAuth {} //TODO: change on real
export interface NearAuth extends BasicAuth {
  functionalKey: string;
}

export type AuthMethod = 'Near' | 'Metamask';

export interface AuthMethodHook {
  values: MethodHookValues;
  setValues: React.Dispatch<React.SetStateAction<MethodHookValues>>;
  checkAuth: () => void;
}

export interface AuthConnectHook {
  connect: () => Promise<void>;
  signIn: () => void;
  signOut: () => void;
  getAccountBalance: (accountId: string) => number;
}

export type MethodHookValues = NearAuth | MetamaskAuth;
