import { ModalContent, ModalWrapper, MainTitle, SubHeader, ConnectButtonStyled } from './styled';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const ConnectButton: React.FC<{ title?: string }> = ({
  title = 'Click here to continue',
}) => {
  const navigate = useNavigate();

  const onProfile = useCallback(() => {
    navigate('/profile');
  }, [navigate]);

  return <ConnectButtonStyled onClick={onProfile}>{title}</ConnectButtonStyled>;
};

export const Modal: React.FC<{ isOpen: boolean; onRequestClose: () => void }> = () => {
  return (
    <ModalWrapper>
      <ModalContent>
        <MainTitle>Successful</MainTitle>
        <SubHeader>Insert sample sentence here</SubHeader>
        <ConnectButton />
      </ModalContent>
    </ModalWrapper>
  );
};
