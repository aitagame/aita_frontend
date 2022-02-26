import { useCallback } from 'react';
import { ConnectButtonStyled } from './styled';
import { useNavigate } from 'react-router-dom';

export const ConnectButton: React.FC<{ title?: string }> = ({
  title = 'Click here to continue',
}) => {
  const navigate = useNavigate();

  const onPlay = useCallback(() => {
    navigate('/profile');
  }, [navigate]);

  return <ConnectButtonStyled onClick={onPlay}>{title}</ConnectButtonStyled>;
};
