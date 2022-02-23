import { ModalWrapper, ModalButton, ModalButtonLink } from './styled';

interface IProps {
  onClose: () => void;
}

export const Modal = ({ onClose }: IProps) => {
  return (
    <ModalWrapper>
      <ModalButtonLink to="/">Exit</ModalButtonLink>
      <ModalButton onClick={onClose}>Close</ModalButton>
    </ModalWrapper>
  );
};
