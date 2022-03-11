import { Routes } from 'react-router';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Main } from 'views/pages/main';
import { BattleSelect } from 'views/pages/battleSelect';
import { Market } from 'views/pages/market';
import { Game } from '../game';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { mainTheme } from './theme/mainTheme';
import { mobileDevice } from './theme/mediaQuery';
import { Login } from 'views/pages/login';
import { AuthContext, AuthContextValues } from './context/Auth';
import { useEffect, useMemo, useState } from 'react';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AuthMethod } from './types/auth';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useAuthMethod } from './hooks/useAuthMethod';
import { Profile as ProfilePage } from './pages/profile';
import { observer } from 'mobx-react-lite';
import { Hackathon } from './pages/hackathonNEAR';
import { HackathonNFT } from './pages/hackathonNEAR/nft';
import { UserData, userStore } from './store/user';

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
  const { user, profile, getAuthData, createProfile } = userStore;

  const { getLSValue } = useLocalStorage();
  const [walletId] = useState(''); // TODO: add after api is ready
  const [authMethod, setAuthMethod] = useState<AuthMethod>(getLSValue('method', false));
  const { checkAuth, values, setValues, connect } = useAuthMethod(authMethod);

  const authValue = useMemo((): AuthContextValues => {
    return {
      authMethod: authMethod,
      setAuthMethod,
      values,
      setValues,
      isLoggedIn: values.accountId === null ? null : !!values.accountId,
      walletId,
      user,
      profile,
    };
  }, [authMethod, profile, setValues, user, values, walletId]);

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
          <Router>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Main />} />
              <Route path="/" element={<ProtectedRoute />}>
                <Route path="/market" element={<Market />} />
                <Route path="/battle-select" element={<BattleSelect />} />
                <Route path="/play" element={<Game />} />
              </Route>
              <Route path="/" element={<ProtectedRoute profileCheck={false} />}>
                <Route path="/hackathon" element={<Hackathon />} />
                <Route path="/hackathon/nft" element={<HackathonNFT />} />
                <Route path="/profile" element={<ProfilePage createProfile={createProfile} />} />
              </Route>
            </Routes>
          </Router>
        </AuthContext.Provider>
      </ThemeProvider>
    </>
  );
});

export const App = () => <AppObserver userStore={userStore} />;
