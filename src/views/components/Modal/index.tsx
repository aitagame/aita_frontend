import { CloseIconBox, ModalContent, ModalWrapper } from './styled';
import { Title, TitleH2 } from '../Title';
import { CloseIcon } from 'views/icons/CloseIcon';

interface ModalProps {
  onClose?: () => void;
  title?: string;
  subtitle?: string;
}

export const Modal: React.FC<ModalProps> = ({ title, subtitle, onClose, children }) => {
  return (
    <ModalWrapper>
      <ModalContent>
        <CloseIconBox onClick={onClose}>
          <CloseIcon />
        </CloseIconBox>
        {title && (
          <TitleH2 mb="2.2rem" fz="2.6rem">
            {title}
          </TitleH2>
        )}
        {subtitle && (
          <Title mb="2rem" fz="2rem">
            {subtitle}
          </Title>
        )}
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};
