import { Routes } from 'react-router'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Main } from 'views/pages/main'
import { Rooms } from 'views/pages/rooms'
import { Market } from 'views/pages/market'
import { Game } from '../game'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { mainTheme } from './theme/mainTheme'
import { mobileDevice } from './theme/mediaQuery'
import { Login } from 'views/pages/login'
import { AuthContext, AuthContextValues } from './context/Auth'
import { useMemo, useState } from 'react'
import { ProtectedRoute } from './components/ProtectedRoute'
import { NearAuth } from './types/near'

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
	`

export const App = () => {
  const [nearAuthData, setNearAuthData] = useState<NearAuth>({
    accountId: '',
    functionalKey: '',
    keyStore: '',
  })
  const [walletId] = useState('') // TODO: add after api is ready

  const authValue = useMemo((): AuthContextValues => {
    return {
      nearAuth: nearAuthData,
      setNearAuth: setNearAuthData,
      isLoggedIn: !!nearAuthData.accountId,
      walletId,
    }
  }, [nearAuthData, walletId])

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
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/play" element={<Game />} />
              </Route>
            </Routes>
          </Router>
        </AuthContext.Provider>
      </ThemeProvider>
    </>
  )
}
