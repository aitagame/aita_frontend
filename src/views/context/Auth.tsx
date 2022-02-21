import { createContext } from 'react'
import { AuthMethod, MethodHookValues } from 'views/types/auth'

export interface AuthContextValues {
  isLoggedIn: boolean
  authMethod: AuthMethod | null
  setAuthMethod: (method: AuthMethod) => void
  walletId: string | null
  values?: MethodHookValues | null
  setValues?: (data: MethodHookValues) => void
}

const AuthContextData: AuthContextValues = {
  isLoggedIn: false,
  walletId: null,
  authMethod: null,
  values: null,
  setValues: () => null,
  setAuthMethod: () => null,
}

export const AuthContext = createContext(AuthContextData)
