import { createContext } from 'react'

export interface AuthContextValues {
  isLoggedIn: boolean
  walletId: string | null
  setWalletId: (id: string) => void
}

const AuthContextData: AuthContextValues = {
  isLoggedIn: false,
  walletId: null,
  setWalletId: () => null,
}

export const AuthContext = createContext(AuthContextData)
