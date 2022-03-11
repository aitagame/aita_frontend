import { Logo } from '../Logo';
import { HeaderWrapper, HeaderContent } from './styled';
import { BurgerMenu, MenuList } from '../Menu';
import { PlayGameButton } from '../PlayGameButton';
import { ProfileIcon } from 'views/icons/ProfileIcon';
import { useAuthValues } from 'views/hooks/useAuthValues';
interface HeaderProps {
  withMenu?: boolean;
  withPlayButton?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ withMenu = true, withPlayButton = true }) => {
  const { isLoggedIn } = useAuthValues();
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Logo />
        {withMenu && <MenuList />}
      </HeaderContent>
      <div>
        {withPlayButton && <PlayGameButton />}
        {isLoggedIn && <ProfileIcon fill="white" />}
      </div>
      {withMenu && <BurgerMenu />}
    </HeaderWrapper>
  );
};
