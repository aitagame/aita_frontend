import { appConfig } from 'config/appConfig';
import { useCallback, useContext, useMemo, useState } from 'react';
import { AuthContext } from 'views/context/Auth';
import { MetamaskAuth, NearAuth } from 'views/types/auth';
import { NearLSWallet } from 'views/types/near';
import { Profile, User } from 'views/types/user';
import { useLocalStorage } from './useLocalStorage';

interface UseAuthValues {
  isLoggedIn: boolean | null;
  profile: Profile;
  user: User;
}

export const useAuthValues = (): UseAuthValues => {
  const { isLoggedIn, profile, user } = useContext(AuthContext);

  return useMemo(
    () => ({
      isLoggedIn,
      profile,
      user,
    }),
    [isLoggedIn, profile, user]
  );
};

export const useNearAuth = () => {
  const { getLSValue } = useLocalStorage();
  const [nearAuthData, setNearAuthData] = useState<NearAuth>({
    accountId: null,
    functionalKey: '',
  });

  const checkNearAuth = useCallback(() => {
    const nearWalletData: NearLSWallet = getLSValue('_wallet_auth_key');
    const accountId = nearWalletData.accountId;
    setNearAuthData({
      accountId,
      functionalKey: getLSValue(
        `near-api-js:keystore:${accountId}:${appConfig.nearNetworkId}`,
        false
      ),
    });
  }, [getLSValue]);

  return useMemo(
    () => ({
      checkAuth: checkNearAuth,
      values: nearAuthData,
      setValues: setNearAuthData,
    }),
    [checkNearAuth, nearAuthData]
  );
};

export const useMetamaskAuth = () => {
  const [values, setValues] = useState<MetamaskAuth>({
    accountId: '',
  });

  const checkAuth = useCallback(() => {
    setValues({
      accountId: '',
    });
  }, []);

  return useMemo(
    () => ({
      checkAuth,
      values,
      setValues,
    }),
    [checkAuth, values]
  );
};
