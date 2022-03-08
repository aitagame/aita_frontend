import { Routes } from 'react-router';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Main } from 'views/pages/main';
import { Rooms } from 'views/pages/rooms';
import { Market } from 'views/pages/market';
import { Game } from '../game';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { mainTheme } from './theme/mainTheme';
import { mobileDevice } from './theme/mediaQuery';
import { Login } from 'views/pages/login';
import { AuthContext, AuthContextValues } from './context/Auth';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AuthMethod, MethodHookValues } from './types/auth';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useAuthMethod } from './hooks/useAuthMethod';
import { Profile as ProfilePage } from './pages/profile';
import AitaService from './service/index.service';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';
import { Profile, User } from './types/user';
import { Hackathon } from './pages/hackathonNEAR';
import { HackathonNFT } from './pages/hackathonNEAR/nft';

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

class UserData {
  user: User = {
    id: 0,
    clan_id: null,
    email: null,
    firstName: '',
    lastName: null,
    created_at: '',
    updated_at: '',
    deleted_at: '',
  };
  profile: Profile = {
    id: '',
    name: '',
    class: '',
    rating: 0,
    is_my: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  *getUser(data: MethodHookValues, identifier: string) {
    const userData: User = yield AitaService.post(`users/authorization/near`, {
      accessKey: (data as any)[identifier], //TODO: fix MethodHookValues type
      accountId: data.accountId,
    });
    const userProfile: Profile = yield AitaService.get(`profiles/${userData.id}`);
    this.user = userData;
    if (userProfile.id) {
      this.profile = userProfile;
    }
  }
}

const userInfo = new UserData();

export const App = observer(() => {
  const { user, profile, getUser } = userInfo;
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
      identifier && getUser(values, identifier);
    }
  }, [authMethod, getUser, user.id, values, values.accountId]);

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
              {/* TODO: remove profileCheck={false} when profile page is ready */}
              <Route path="/" element={<ProtectedRoute profileCheck={false} />}>
                <Route path="/market" element={<Market />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/play" element={<Game />} />
              </Route>
              <Route path="/" element={<ProtectedRoute profileCheck={false} />}>
                <Route path="/hackathon" element={<Hackathon />} />
                <Route path="/hackathon/nft" element={<HackathonNFT />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Route>
            </Routes>
          </Router>
        </AuthContext.Provider>
      </ThemeProvider>
    </>
  );
});
