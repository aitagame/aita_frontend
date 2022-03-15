import { Logo } from '../Logo';
import { HeaderWrapper, HeaderContent, DinamicContent, UserMenuContainer } from './styled';
import { BurgerMenu, MenuList } from '../Menu';
import { PlayGameButton } from '../PlayGameButton';
import { useAuthValues } from 'views/hooks/useAuthValues';
import { UserMenu } from '../Menu/UserMenu';

interface HeaderProps {
  withMenu?: boolean;
  withPlayButton?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ withMenu = true, withPlayButton = true }) => {
  const { isLoggedIn, profile, accountId, authMethod } = useAuthValues();
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Logo />
        {withMenu && <MenuList />}
      </HeaderContent>
      <DinamicContent>
        {withPlayButton && <PlayGameButton />}
        <UserMenuContainer withMenu={withMenu}>
          {isLoggedIn && (
            <UserMenu profile={profile} accountId={accountId} accountMethod={authMethod} />
          )}
        </UserMenuContainer>
      </DinamicContent>
      {withMenu && (
        <BurgerMenu
          isLoggedIn={isLoggedIn}
          profile={profile}
          accountId={accountId}
          accountMethod={authMethod}
        />
      )}
    </HeaderWrapper>
  );
};
