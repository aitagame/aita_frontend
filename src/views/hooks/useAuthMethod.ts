import { useCallback, useMemo } from 'react'
import { AuthConnectHook, AuthMethod, AuthMethodHook } from 'views/types/auth'
import { useMetamaskAuth, useNearAuth } from './useAuth'
import { useMetamask } from './useMetamask'
import { useNear } from './useNear'

export const useAuthMethod = (method: AuthMethod) => {
  const getMethodHook = useCallback((): (() => AuthMethodHook) => {
    switch (method) {
      case 'Near':
        return useNearAuth as () => AuthMethodHook
      case 'Metamask':
        return useMetamaskAuth
      default:
        return useNearAuth as () => AuthMethodHook // TODO: update types, check why there is an error
    }
  }, [method])

  const getConnectHook = useCallback((): (() => AuthConnectHook) => {
    switch (method) {
      case 'Near':
        return useNear
      case 'Metamask':
        return useMetamask
      default:
        return useNear
    }
  }, [method])

  const { values, setValues, checkAuth } = getMethodHook()()

  const { connect } = getConnectHook()()

  return useMemo(
    () => ({
      values,
      setValues,
      checkAuth,
      connect,
    }),
    [checkAuth, setValues, values, connect]
  )
}
