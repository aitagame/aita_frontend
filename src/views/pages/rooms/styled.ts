import styled from 'styled-components';
import { Wrapper } from 'views/components/Wrapper';
import { mobileDevice } from 'views/theme/mediaQuery';

export const RoomsWrapper = styled(Wrapper)`
  ${mobileDevice} {
    padding-right: 0;
    padding-left: 0;
  }
`;
