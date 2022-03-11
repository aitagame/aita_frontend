import { useState } from 'react';
import { Profile } from 'views/types/user';
import { AppLink } from '../AppLink';
import { Button } from '../Button';
import { Title, TitleH2 } from '../Title';
import { Burger, Menu, Separator, UserMenuContent } from './styled';

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
interface UserMenuProps {
  profile?: Profile;
  accountMethod?: string;
  accountId?: string;
}

export const UserMenu: React.FC<UserMenuProps> = ({ profile, accountMethod, accountId }) => {
  return (
    <UserMenuContent>
      <Title mb="1rem">
        {accountMethod} - {accountId}
      </Title>
      {profile && (
        <TitleH2 mb="2rem">
          {profile.name} - {profile.class}
        </TitleH2>
      )}
      <Button>Logout</Button>
    </UserMenuContent>
  );
};

interface BurgerMenuProps extends UserMenuProps {
  isLoggedIn: boolean;
}

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
            <UserMenu profile={profile} accountMethod={accountMethod} accountId={accountId} />
            <Separator />
          </>
        )}
        <MenuList />
      </Menu>
    </>
  );
};
