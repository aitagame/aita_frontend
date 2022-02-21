import { createContext } from 'react'
import { AuthMethod } from 'views/types/auth'
import { NearAuth } from 'views/types/near'

export interface AuthContextValues {
  isLoggedIn: boolean
  authMethod: AuthMethod | null
  setAuthMethod: (method: AuthMethod) => void
  nearAuth?: NearAuth
  walletId: string | null
  setNearAuth?: (data: NearAuth) => void
}

const AuthContextData: AuthContextValues = {
  isLoggedIn: false,
  walletId: null,
  authMethod: null,
  nearAuth: {
    accountId: '',
    functionalKey: '',
    keyStore: '',
  },
  setNearAuth: () => null,
  setAuthMethod: () => null,
}

export const AuthContext = createContext(AuthContextData)
