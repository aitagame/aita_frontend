import { ModalWrapper, ModalButton, ModalButtonLink } from './styled';

interface IProps {
  onClose: () => void;
  onExit: () => void;
}

export const Modal = (props: IProps) => {
  return (
    <ModalWrapper>
      <ModalButtonLink onClick={props.onExit} to="/">
        Exit
      </ModalButtonLink>
      <ModalButton onClick={props.onClose}>Close</ModalButton>
    </ModalWrapper>
  );
};
