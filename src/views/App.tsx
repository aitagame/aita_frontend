import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { mainTheme } from './theme/mainTheme';
import { mobileDevice } from './theme/mediaQuery';
import { AuthContext, AuthContextValues } from './context/Auth';
import { useEffect, useMemo, useState } from 'react';
import { AuthMethod } from './types/auth';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useAuthMethod } from './hooks/useAuthMethod';
import { observer } from 'mobx-react-lite';

import { UserData, userStore } from './store/user';
import { Loading } from './components/Loading';
import { AppRoute } from './AppRoute';

const GlobalStyle = createGlobalStyle`
		* {
    box-sizing: border-box;
    margin: 0;
    line-height: 1;
  }

  html {
    font-size: 18px;
  }

  body {
    margin: 0;
    overflow-x: hidden;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    
    ${mobileDevice} {
      text-align: center;
    }

    #root {
      min-height: 100vh;
      min-width: 100vw;
    }

    button {
      border: 0;
      outline: none;
      cursor: pointer;
      background-color: transparent;
    }
  }
	`;

const getIdentifier = (authMethod: AuthMethod) => {
  switch (authMethod) {
    case 'Near':
      return 'functionalKey';
    default:
      return null;
  }
};

export const AppObserver: React.FC<{ userStore: UserData }> = observer(({ userStore }) => {
  const { user, profile, getAuthData, createProfile, loading } = userStore;

  const { getLSValue } = useLocalStorage();
  const [walletId] = useState(''); // TODO: add after api is ready
  const [authMethod, setAuthMethod] = useState<AuthMethod>(getLSValue('method', false));
  const { checkAuth, values, setValues, connect, signOut } = useAuthMethod(authMethod);

  const authValue = useMemo((): AuthContextValues => {
    return {
      authMethod: authMethod,
      setAuthMethod,
      values,
      setValues,
      isLoggedIn: Boolean(values.accountId),
      walletId,
      user,
      profile,
      signOut: () => {
        signOut();
        localStorage.clear();
        window.location.reload();
      },
    };
  }, [authMethod, profile, setValues, signOut, user, values, walletId]);

  useEffect(() => {
    if (!!values.accountId && !user.id) {
      const identifier = getIdentifier(authMethod);
      identifier && getAuthData(values, identifier);
    }
  }, [authMethod, getAuthData, user.id, values, values.accountId]);

  useEffect(() => {
    localStorage.setItem('method', authMethod);
  }, [authMethod]);

  useEffect(() => {
    const connectWithCheck = async () => {
      try {
        await connect();
        await checkAuth();
      } catch (e) {
        console.error(e);
      }
    };

    connectWithCheck();
  }, [authMethod, connect, checkAuth]);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        <AuthContext.Provider value={authValue}>
          {loading ? <Loading overlay={false} /> : <AppRoute />}
        </AuthContext.Provider>
      </ThemeProvider>
    </>
  );
});

export const App = () => <AppObserver userStore={userStore} />;
