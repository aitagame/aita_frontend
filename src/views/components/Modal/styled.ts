import styled from 'styled-components';
import { desktopDevice, tabletDevice, mobileDevice } from 'views/theme/mediaQuery';

export const ModalWrapper = styled.div`
  // display: none;
  position: fixed;
  top: 0;
  z-index: 1;
  overflow: hidden;
  padding-top: 7rem;
  margin: auto;
  overflow: auto;
  width: 100%;
  height: 100%;
  ${desktopDevice} {
  }
`;

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.text};
  width: 100%;
  height: 551px;
  border-radius: 30px;
  margin: auto;

  ${desktopDevice} {
    width: 763px;
  }

  ${tabletDevice} {
    width: 85%;
  }
  ${mobileDevice} {
    width: 85%;
  }
`;
