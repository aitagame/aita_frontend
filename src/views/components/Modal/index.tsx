import { ModalContent, ModalWrapper, MainTitle, SubHeader, ConnectButtonStyled } from './styled';

export const ConnectButton: React.FC<{ title?: string }> = ({
  title = 'Click here to continue',
}) => {
  return <ConnectButtonStyled>{title}</ConnectButtonStyled>;
};

export const Modal: React.FC<{ isOpen: boolean; onRequestClose: () => void }> = ({ isOpen }) => {
  return (
    <ModalWrapper isOpen={isOpen}>
      <ModalContent>
        <MainTitle fz="2rem">Successful</MainTitle>
        <SubHeader>Insert sample sentence here</SubHeader>
        <ConnectButton />
      </ModalContent>
    </ModalWrapper>
  );
};
