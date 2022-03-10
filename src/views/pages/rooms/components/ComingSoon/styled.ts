import styled from 'styled-components';
import { mobileDevice } from 'views/theme/mediaQuery';

export const ContentWrapper = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  padding: 11rem;
  font-size: 2rem;
  ${mobileDevice} {
    padding: 11rem 0;
  }
`;
