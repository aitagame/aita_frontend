import { useCallback } from 'react'
import { PlayGameButtonStyled } from './styled'
import { useNavigate } from 'react-router-dom'

export const PlayGameButton: React.FC<{ title?: string }> = ({ title = 'Play Game' }) => {
  const navigate = useNavigate()

  const onPlay = useCallback(() => {
    navigate('/play')
  }, [navigate])

  return <PlayGameButtonStyled onClick={onPlay}>{title}</PlayGameButtonStyled>
}
