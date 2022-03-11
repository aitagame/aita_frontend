import { Logo } from '../Logo';
import { HeaderWrapper, HeaderContent, DinamicContent, IconContainer } from './styled';
import { BurgerMenu, MenuList } from '../Menu';
import { PlayGameButton } from '../PlayGameButton';
import { ProfileIcon } from 'views/icons/ProfileIcon';
import { useAuthValues } from 'views/hooks/useAuthValues';

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
        <IconContainer withMenu={withMenu}>
          {isLoggedIn && <ProfileIcon fill="white" />}
        </IconContainer>
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
