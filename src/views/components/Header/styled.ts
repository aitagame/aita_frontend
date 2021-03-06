import styled from 'styled-components';
import { desktopDevice, mobileDevice } from 'views/theme/mediaQuery';
import { AppLink } from '../AppLink';
import { LogoLink } from '../Logo';
import { PlayGameButtonStyled } from '../PlayGameButton/styled';

export const HeaderWrapper = styled.header`
  width: 100vw;
  position: fixed;
  z-index: 2;
  padding: ${({ theme }) => `1rem ${theme.gutter.small}}`};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  ${desktopDevice} {
    padding: ${({ theme }) => `1rem ${theme.gutter.medium}}`};
  }
`;

export const HeaderContent = styled.div`
  ${LogoLink} {
    margin-right: 5rem;
  }
  ${mobileDevice} {
    ${AppLink} {
      display: none;
    }
  }
`;

export const DinamicContent = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gutter.elements};
  ${mobileDevice} {
    ${PlayGameButtonStyled} {
      display: none;
    }
  }
`;

export const UserMenuContainer = styled.div<{ withMenu: boolean }>`
  ${mobileDevice} {
    display: ${({ withMenu }) => withMenu && 'none'};
  }
`;
