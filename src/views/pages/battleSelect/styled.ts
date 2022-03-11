import styled from 'styled-components';
import { Button } from 'views/components/Button';
import { Wrapper } from 'views/components/Wrapper';
import { mobileDevice } from 'views/theme/mediaQuery';

export const RoomsWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.gutter.elements};
  width: 100%;
  height: 100%;

  ${mobileDevice} {
    flex-direction: column;
  }
`;

export const RoomItem = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  min-height: 40vh;
  border-radius: 0.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
  ${Button} {
    width: 50%;
  }
  ${mobileDevice} {
    width: 100%;
    border-radius: 0;
    min-height: 20vw;
  }
`;
