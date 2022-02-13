import { HeaderLink, HeaderWrapper, Logo, PlayButton } from './styled'

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
      <PlayButton>Play Game</PlayButton>
    </HeaderWrapper>
  )
}
