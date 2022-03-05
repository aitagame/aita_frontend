import styled from 'styled-components';
import { TitleH2 } from 'views/components/Title';
import { Button } from 'views/components/Button';
import { mobileDevice } from 'views/theme/mediaQuery';

export const RoomBaseLayout = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;

  ${mobileDevice} {
    flex-direction: column;
    height: 100%;
    padding: 2rem 0;
  }
`;
export const RoomListWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  width: 30%;
  height: 70%;
  border-radius: 0.625rem;
  ${mobileDevice} {
    width: 100%;
    border-radius: 0;
  }
`;

export const RoomHeader = styled(TitleH2)`
  margin: auto;
  margin-top: 6rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;

export const RoomButton = styled(Button)`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border: 1.5px solid ${({ theme }) => theme.colors.primary};
  display: block;
  margin: 3rem auto;
  padding: 1rem 4rem;
  border-radius: 0.625rem;
  font-size: 1rem;
  :hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;
