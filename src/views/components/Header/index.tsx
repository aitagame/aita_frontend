import { Logo } from '../Logo';
import { HeaderWrapper, HeaderContent } from './styled';
import { BurgerMenu, MenuList } from '../Menu';
import { PlayGameButton } from '../PlayGameButton';
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
    </HeaderWrapper>
  );
};
