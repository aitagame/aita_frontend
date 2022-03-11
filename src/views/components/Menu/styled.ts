import styled from 'styled-components';
import { mobileDevice } from 'views/theme/mediaQuery';

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

export const UserMenuContent = styled.div`
  background: ${({ theme }) => theme.colors.backgroundPrimary};
  width: 100%;
  box-shadow: ${({ theme }) => `0 0 80px 20px ${theme.colors.backgroundPrimary}`};
`;

export const ProfileInfo = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gutter.elements};
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;
`;
