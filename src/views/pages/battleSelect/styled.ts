import styled from 'styled-components';
import { Button } from 'views/components/Button';
import { Wrapper } from 'views/components/Wrapper';
import { desktopDevice } from 'views/theme/mediaQuery';

export const RoomsWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.gutter.elements};
  width: 100%;
  height: 100%;

  ${desktopDevice} {
    flex-direction: row;
  }
`;

export const RoomItem = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  height: fit-content;
  max-height: 50rem;
  width: 100%;
  border-radius: 0;
  min-height: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
  ${Button} {
    width: 50%;
  }
  ${desktopDevice} {
    min-height: 30vh;
    width: 20vw;
    max-width: 40rem;
    border-radius: 0.625rem;
  }
`;
