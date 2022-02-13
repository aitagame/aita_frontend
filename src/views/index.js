import { Routes } from 'react-router'
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'
import { Main } from './main'
import { Rooms } from './rooms'
import { Market } from './market'
import { Game } from '../game'
import { createGlobalStyle } from 'styled-components'

export const App = () => {
  const GlobalStyle = createGlobalStyle`
    body{
      margin: 0;
    }
  `
  return (
    <>
      <GlobalStyle />
      <Router>
        <Link to="/">Main</Link>
        <Link to="/market">Market</Link>
        <Link to="/rooms">Rooms</Link>
        <Link to="/play">Play</Link>
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
