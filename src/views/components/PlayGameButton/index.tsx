import { useCallback, useContext } from 'react'
import { AuthContext } from 'views/context/Auth'
import { PlayGameButtonStyled } from './styled'
import { useNavigate } from 'react-router-dom'

export const PlayGameButton: React.FC<{ title?: string }> = ({ title = 'Play Game' }) => {
  const { isLoggedIn } = useContext(AuthContext)
  const navigate = useNavigate()

  const onPlay = useCallback(() => {
    if (isLoggedIn) navigate('/game')
    navigate('/login')
  }, [isLoggedIn, navigate])

  return <PlayGameButtonStyled onClick={onPlay}>{title}</PlayGameButtonStyled>
}
