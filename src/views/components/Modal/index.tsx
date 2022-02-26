import { ModalContent, ModalWrapper } from './styled';
import { MainTitle, SubHeader } from 'views/components/Title';
import { ConnectButton } from '../ConnectButton';

export const Modal = () => {
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
