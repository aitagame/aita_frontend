import { useState } from 'react';
import { BurgerMenuProps } from 'views/types/menu';
import { AppLink } from '../AppLink';
import { Burger, Menu, Separator } from './styled';
import { UserMenuList } from './UserMenu';

export const MenuList: React.FC = () => {
  return (
    <>
      <AppLink to="/profile">Profile</AppLink>
      <AppLink to="/market">Market</AppLink>
      <AppLink to="/battle-select">Battle</AppLink>
      <AppLink to="/play">Play</AppLink>
      <AppLink to="/hackathon">NEAR Challenges</AppLink>
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
