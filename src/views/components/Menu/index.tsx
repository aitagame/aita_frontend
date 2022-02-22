import { useState } from 'react';
import { AppLink } from '../AppLink';
import { Burger, Menu } from './styled';

export const MenuList: React.FC = () => {
  return (
    <>
      <AppLink to="/">Main</AppLink>
      <AppLink to="/market">Market</AppLink>
      <AppLink to="/rooms">Rooms</AppLink>
      <AppLink to="/play">Play</AppLink>
    </>
  );
};

export const BurgerMenu: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Burger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Burger>
      <Menu open={open}>
        <MenuList />
      </Menu>
    </>
  );
};
