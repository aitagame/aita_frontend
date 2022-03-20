import styled from 'styled-components';
import { desktopDevice, mobileDevice } from 'views/theme/mediaQuery';

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: ${({ theme }) => `4rem ${theme.gutter.medium}`};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.gutter.medium};

  ${desktopDevice} {
    flex-direction: row;
  }
`;
export const Links = styled.div`
  display: flex;
  flex-direction: row;
  ${mobileDevice} {
    flex-direction: column;
    gap: ${({ theme }) => theme.gutter.small};
  }
`;
