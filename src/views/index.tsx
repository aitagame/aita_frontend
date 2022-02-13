import { Routes } from 'react-router'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Main } from './main'
import { Rooms } from './rooms'
import { Market } from './market'
import { Game } from '../game'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
		* {
    box-sizing: border-box;
    margin: 0;
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
  }
	`

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/market" element={<Market />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/play" element={<Game />} />
          <Route path="*" element={<Main />} />
        </Routes>
      </Router>
    </>
  )
}
