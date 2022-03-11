import styled from 'styled-components';
import { desktopDevice } from 'views/theme/mediaQuery';

export const Wrapper = styled.div<{ withGap?: boolean }>`
  padding: ${({ theme }) => theme.gutter.small};
  margin-top: ${({ withGap }) => withGap && '10vh'};

  ${desktopDevice} {
    padding: ${({ theme }) => theme.gutter.medium};
    margin-top: ${({ withGap }) => withGap && '20vh'};
  }
`;
