import styled from 'styled-components';
import { desktopDevice } from 'views/theme/mediaQuery';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
`;

export const HeaderWrapper = styled.main`
  position: absolute;
  top: 35vh;
  width: 100%;
  text-align: center;
  ${desktopDevice} {
    top: 34vh;
  }
`;
