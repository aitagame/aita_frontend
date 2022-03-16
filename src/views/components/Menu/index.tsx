import { useState } from 'react';
import { useLocation } from 'react-router';
import { BurgerMenuProps } from 'views/types/menu';
import { AppLink } from '../AppLink';
import { Burger, Menu, Separator } from './styled';
import { UserMenuList } from './UserMenu';

const menuLinks = {
  profile: {
    path: '/profile',
    title: 'Profile',
  },
  market: {
    path: '/market',
    title: 'Market',
  },
  battle: {
    path: '/battle-select',
    title: 'Battle',
  },
  game: {
    path: '/play',
    title: 'Play',
  },
  near: {
    path: '/hackathon',
    title: 'NEAR Challenges',
  },
};

export const MenuList: React.FC = () => {
  const location = useLocation();
  return (
    <>
      {Object.values(menuLinks).map(link => (
        <AppLink key={link.path} to={link.path} active={location.pathname === link.path}>
          {link.title}
        </AppLink>
      ))}
    </>
  );
};

export const BurgerMenu: React.FC<BurgerMenuProps> = ({
  isLoggedIn,
  profile,
  accountMethod,
  accountId,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Burger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Burger>
      <Menu open={open}>
        {isLoggedIn && (
          <>
            <UserMenuList
              displayTheme="dark"
              profile={profile}
              accountMethod={accountMethod}
              accountId={accountId}
            />
            <Separator />
          </>
        )}
        <MenuList />
      </Menu>
    </>
  );
};
