import { useCallback } from 'react';
import { PlayGameButtonStyled } from './styled';
import { useNavigate } from 'react-router-dom';

export const PlayGameButton: React.FC<{ title?: string; disabled?: boolean }> = ({
  title = 'Play Game',
  disabled = false,
}) => {
  const navigate = useNavigate();

  const onPlay = useCallback(() => {
    navigate('/battle-select');
  }, [navigate]);

  return (
    <PlayGameButtonStyled disabled={disabled} onClick={onPlay}>
      {title}
    </PlayGameButtonStyled>
  );
};
