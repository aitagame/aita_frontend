import styled from 'styled-components';
import { desktopDevice } from 'views/theme/mediaQuery';
import { Title, TitleH2 } from '../Title';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 999;
  overflow: hidden;
  margin: auto;
  overflow: auto;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  max-height: 90%;
  border-radius: 30px;
  margin: auto;
  width: 85%;
  color: ${({ theme }) => theme.colors.textReverse};
  padding: ${({ theme }) => theme.gutter.medium};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  ${TitleH2}, ${Title} {
    color: ${({ theme }) => theme.colors.textReverse};
  }

  ${desktopDevice} {
    width: 60%;
  }
`;

export const CloseIconBox = styled.div`
  width: 2rem;
  height: 2rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
  svg {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;
