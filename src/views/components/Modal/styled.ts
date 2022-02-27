import styled from 'styled-components';
import { desktopDevice } from 'views/theme/mediaQuery';
import { Button } from '../Button';
import { Title, TitleH2 } from '../Title';

export const ModalWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  z-index: 1;
  overflow: hidden;
  padding-top: 5rem;
  margin: auto;
  overflow: auto;
  width: 100%;
  height: 100%;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors.text};
  height: 34rem;
  border-radius: 2rem;
  margin: auto;
  width: 85%;
  ${desktopDevice} {
    width: 55%;
  }
`;

export const MainTitle = styled(TitleH2)`
  color: #000000;
  text-align: center;
  position: relative;
  top: 8rem;
`;

export const SubHeader = styled(Title)`
  color: #000000;
  text-align: center;
  position: relative;
  top: 10rem;
`;

export const ConnectButtonStyled = styled(Button)`
  font-size: 1.25rem;
  padding: 1rem;
  position: relative;
  top: 14rem;
  width: 55%;
  margin: 2rem auto;
  ${desktopDevice} {
    width: 31.25rem;
  }
`;
