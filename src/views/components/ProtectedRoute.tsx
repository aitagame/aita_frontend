import { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router';
import { useAuthValues } from 'views/hooks/useAuthValues';
import { useLocalStorage } from 'views/hooks/useLocalStorage';

export const ProtectedRoute: React.FC<{ profileCheck?: boolean }> = ({ profileCheck = true }) => {
  const { isLoggedIn, profile } = useAuthValues();
  const { pathname } = useLocation();
  const { setPreviousePage } = useLocalStorage();

  useEffect(() => {
    if (!isLoggedIn) {
      setPreviousePage(pathname);
    }
  }, [isLoggedIn, pathname, setPreviousePage]);

  if (!isLoggedIn) return <Navigate to="/login" replace />;
  // if (profileCheck && !profile.id) return <Navigate to="/profile" replace />;

  return <Outlet />;
};
