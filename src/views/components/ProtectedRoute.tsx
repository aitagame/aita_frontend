import { useEffect } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router'
import { useAuth } from 'views/hooks/useAuth'
import { useLocalStorage } from 'views/hooks/useLocalStorage'

export const ProtectedRoute: React.FC = () => {
  const { isLoggedIn } = useAuth()
  const { pathname } = useLocation()
  const { setPreviousePage } = useLocalStorage()

  useEffect(() => {
    if (!isLoggedIn) {
      setPreviousePage(pathname)
    }
  }, [isLoggedIn, pathname, setPreviousePage])

  if (!isLoggedIn) return <Navigate to="/login" replace />

  return <Outlet />
}
