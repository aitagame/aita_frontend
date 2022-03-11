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
  height: 40vh;
  max-height: 50rem;
  width: 20vw;
  max-width: 40rem;
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
    height: 20vw;
  }
`;
