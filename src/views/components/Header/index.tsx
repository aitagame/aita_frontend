import { Logo } from '../Logo';
import { HeaderWrapper, HeaderContent } from './styled';
import { BurgerMenu, MenuList } from '../Menu';
import { PlayGameButton } from '../PlayGameButton';
import { ProfileIcon } from 'views/icons/ProfileIcon';
interface HeaderProps {
  withMenu?: boolean;
  withPlayButton?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ withMenu = true, withPlayButton = true }) => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Logo />
        {withMenu && <MenuList />}
      </HeaderContent>
      {withPlayButton && <PlayGameButton />}
      {withMenu && <BurgerMenu />}
      <ProfileIcon fill="white" />
    </HeaderWrapper>
  );
};
