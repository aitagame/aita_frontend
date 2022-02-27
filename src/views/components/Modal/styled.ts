import styled from 'styled-components';
import { desktopDevice, tabletDevice, mobileDevice } from 'views/theme/mediaQuery';

export const ModalWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  z-index: 1;
  overflow: hidden;
  padding-top: 7rem;
  margin: auto;
  overflow: auto;
  width: 100%;
  height: 100%;
  display: ${({ isOpen }) => (isOpen ? null : 'none')};
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

export const MainTitle = styled.h2<{ fz?: string; mb?: string }>`
  font-size: ${({ fz }) => fz || '2rem'};
  // margin-bottom: ${({ mb }) => mb || 'initial'};
  color: #000000;
  font-weight: 500;
  text-align: center;
  position: relative;
  top: 8rem;
`;

export const SubHeader = styled.h6<{ fz?: string; mb?: string }>`
  font-size: ${({ fz }) => fz || '1.5rem'};
  // margin-bottom: ${({ mb }) => mb || 'initial'};
  color: #000000;
  font-weight: 500;
  text-align: center;
  position: relative;
  top: 10rem;
`;

export const ConnectButtonStyled = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.textReverse};
  border: 0;
  font-size: 20px;
  border-radius: 2rem;
  outline: none;
  padding: 1rem;
  cursor: pointer;
  position: relative;
  top: 14rem;
  :hover {
    background-color: ${({ theme }) => theme.colors.secondaryLight};
  }
  ${desktopDevice} {
    width: 500px;
    margin: 2rem 0;
  }
  ${tabletDevice} {
    width: 55%;
    margin: 2rem auto;
  }
  ${mobileDevice} {
    width: 55%;
    margin: 2rem auto;
  }
`;
