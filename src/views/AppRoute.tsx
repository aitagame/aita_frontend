import { Routes } from 'react-router';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Main } from 'views/pages/main';
import { BattleSelect } from 'views/pages/battleSelect';
import { Market } from 'views/pages/market';
import { Game } from '../game';
import { Login } from 'views/pages/login';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Profile as ProfilePage } from './pages/profile';
import { Hackathon } from './pages/hackathonNEAR';
import { HackathonNFT } from './pages/hackathonNEAR/nft';
import { WorldTree } from './pages/worldTree';

export const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/market" element={<Market />} />
          <Route path="/battle-select" element={<BattleSelect />} />
          <Route path="/play" element={<Game />} />
          <Route path="/worldTree" element={<WorldTree />} />
        </Route>
        <Route path="/" element={<ProtectedRoute profileCheck={false} />}>
          <Route path="/hackathon" element={<Hackathon />} />
          <Route path="/hackathon/nft" element={<HackathonNFT />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </Router>
  );
};
