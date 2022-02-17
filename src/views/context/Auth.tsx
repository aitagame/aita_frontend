import { createContext } from 'react'
import { NearAuth } from 'views/types/near'

export interface AuthContextValues {
  isLoggedIn: boolean
  nearAuth: NearAuth
  walletId: string | null
  setNearAuth: (data: NearAuth) => void
}

const AuthContextData: AuthContextValues = {
  isLoggedIn: false,
  walletId: null,
  nearAuth: {
    accountId: '',
    functionalKey: '',
    keyStore: '',
  },
  setNearAuth: () => null,
}

export const AuthContext = createContext(AuthContextData)
