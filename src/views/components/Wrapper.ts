import styled from 'styled-components';
import { desktopDevice } from 'views/theme/mediaQuery';

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.gutter.small};
  ${desktopDevice} {
    padding: ${({ theme }) => theme.gutter.medium};
  }
`;
