import { useContext, useMemo } from 'react'
import { AuthContext } from 'views/context/Auth'

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
