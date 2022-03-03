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
