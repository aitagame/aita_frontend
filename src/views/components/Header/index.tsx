import { Button } from '../Button'
import { HeaderLink, HeaderWrapper, Logo } from './styled'

export const Header = () => {
  return (
    <HeaderWrapper>
      <div>
        <Logo src="" />
        <HeaderLink to="/">Main</HeaderLink>
        <HeaderLink to="/market">Market</HeaderLink>
        <HeaderLink to="/rooms">Rooms</HeaderLink>
        <HeaderLink to="/play">Play</HeaderLink>
      </div>
      <Button>Play Game</Button>
    </HeaderWrapper>
  )
}
