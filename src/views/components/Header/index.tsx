import { Button } from '../Button'
import { AppLink } from '../AppLink'
import { Logo } from '../Logo'
import { HeaderWrapper } from './styled'

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <div>
        <Logo src="" />
        <AppLink to="/">Main</AppLink>
        <AppLink to="/market">Market</AppLink>
        <AppLink to="/rooms">Rooms</AppLink>
        <AppLink to="/play">Play</AppLink>
      </div>
      <Button>Play Game</Button>
    </HeaderWrapper>
  )
}
