import { Navigate, Outlet } from 'react-router'
import { useAuth } from 'views/hooks/useAuth'

export const ProtectedRoute: React.FC = () => {
  const { isLoggedIn } = useAuth()

  if (!isLoggedIn) return <Navigate to="/login" />

  return <Outlet />
}
