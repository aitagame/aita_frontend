import styled from 'styled-components';
import { mobileDevice } from 'views/theme/mediaQuery';
import { UserMenuTheme } from 'views/types/menu';

export const Burger = styled.div<{ open: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  ${mobileDevice} {
    display: flex;
  }
`;

export const Menu = styled.nav<{ open: boolean }>`
  display: none;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => `${theme.colors.backgroundPrimary}e5`};
  text-align: center;
  padding: ${({ theme }) => theme.gutter.small};
  position: absolute;
  top: 100%;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-130vh)')};
  width: 100vw;
  gap: 2rem;
  height: 100vh;
  ${mobileDevice} {
    display: flex;
  }
`;

export const Separator = styled.hr`
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
`;

export const UserMenuContent = styled.div<{ displayTheme: UserMenuTheme }>`
  width: 100%;
  background: ${({ theme, displayTheme }) =>
    theme.colors[displayTheme === 'dark' ? 'backgroundPrimary' : 'text']};
  box-shadow: ${({ theme, displayTheme }) =>
    displayTheme === 'dark' && `0 0 80px 20px ${theme.colors.backgroundPrimary}`};
  color: ${({ theme, displayTheme }) =>
    theme.colors[displayTheme === 'dark' ? 'text' : 'textReverse']};
`;

export const ProfileInfo = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gutter.elements};
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;
`;

export const UserMenuWrapper = styled.div`
  position: relative;
`;

export const UserMenuModal = styled.div<{ isOpened: boolean }>`
  display: ${({ isOpened }) => (isOpened ? 'block' : 'none')};
  position: absolute;
  bottom: -11.5rem;
  right: 0;
  width: 20rem;
  max-width: 100vw;
  padding: ${({ theme }) => theme.gutter.small};
  background-color: ${({ theme }) => theme.colors.text};
  border-radius: 0.8rem;
`;

export const AccountInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const DarkCrystalIcon = styled.img`
  width: 1rem;
`;

export const Balance = styled.div`
  display: flex;
  align-items: center;
`;
