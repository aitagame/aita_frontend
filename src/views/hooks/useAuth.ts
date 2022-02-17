import { appConfig } from 'config/appConfig'
import { useCallback, useContext, useMemo, useState } from 'react'
import { AuthContext } from 'views/context/Auth'
import { NearAuth, NearLSWallet } from 'views/types/near'
import { useLocalStorage } from './useLocalStorage'

interface useAuthValues {
  isLoggedIn: boolean
}

export const useAuth = (): useAuthValues => {
  const { isLoggedIn } = useContext(AuthContext) // TODO: add check for profile existance

  return useMemo(
    () => ({
      isLoggedIn,
    }),
    [isLoggedIn]
  )
}

export const useNearAuth = () => {
  const { getLSValue } = useLocalStorage()
  const [nearAuthData, setNearAuthData] = useState<NearAuth>({
    accountId: '',
    functionalKey: '',
    keyStore: '',
  })

  const checkNearAuth = useCallback(() => {
    const nearWalletData: NearLSWallet = getLSValue('_wallet_auth_key')
    const accountId = nearWalletData.accountId

    if (!accountId) return
    setNearAuthData({
      accountId,
      functionalKey: nearWalletData.allKeys[0],
      keyStore: getLSValue(`near-api-js:keystore:${accountId}:${appConfig.nearNetworkId}`, false),
    })
  }, [getLSValue])

  return useMemo(
    () => ({
      checkNearAuth,
      nearAuthValues: nearAuthData,
      setNearAuthData,
    }),
    [checkNearAuth, nearAuthData]
  )
}
