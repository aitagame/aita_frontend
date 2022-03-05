import styled from 'styled-components';
import { Wrapper } from 'views/components/Wrapper';
import { mobileDevice } from 'views/theme/mediaQuery';
import { TabsWrapper } from './components/Tabs/styled';

export const RoomsWrapper = styled(Wrapper)`
  ${mobileDevice} {
    padding-right: 0;
    padding-left: 0;
  }

  ${TabsWrapper} {
    width: 67vw;
    min-width: fit-content;
    ${mobileDevice} {
      width: 100%;
    }
  }
`;

export const ContentWrapper = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  height: 60vh;
  padding: 11rem;
  font-size: 2rem;
  ${mobileDevice} {
    padding: 11rem 0;
  }
`;
