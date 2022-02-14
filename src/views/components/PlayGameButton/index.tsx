import { PlayGameButtonStyled } from './styled'

export const PlayGameButton: React.FC<{ title?: string }> = ({ title = 'Play Game' }) => {
  // TODO: add context with logged in state
  return <PlayGameButtonStyled>{title}</PlayGameButtonStyled>
}
