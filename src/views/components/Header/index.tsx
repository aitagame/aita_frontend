import { Logo } from '../Logo';
import { HeaderWrapper, HeaderContent } from './styled';
import { BurgerMenu, MenuList } from '../Menu';
import { PlayGameButton } from '../PlayGameButton';

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Logo />
        <MenuList />
      </HeaderContent>
      <PlayGameButton />
      <BurgerMenu />
    </HeaderWrapper>
  );
};
