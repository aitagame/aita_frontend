import styled from 'styled-components';
import { Title } from 'views/components/Title';
import { desktopDevice } from 'views/theme/mediaQuery';
import { Button } from 'views/components/Button';

export const Wrapper = styled.div`
  display: block;
`;

export const SelectCharacter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

export const SubHeader = styled(Title)`
  margin: 3rem auto;
  display: flex;
  justify-content: center;
`;

export const CharacterType = styled(Button)`
  width: 30rem;
  max-width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.text};

  :hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  :active {
    background-color: ${({ theme }) => theme.colors.secondary};
    opacity: 0.6;
    cursor: initial;
  }

  svg {
    width: 5vmax;
    height: 5vmax;
  }

  ${desktopDevice} {
    flex-direction: column;
    width: 14vmax;
    height: 15vmax;
    max-width: 14vmax;
  }
`;

export const ElementName = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin-top: 0.5rem;
`;

export const StartGameButton = styled(Button)`
  margin: 3rem auto;
  display: block;
  padding: 1rem;
  font-size: 1rem;
  width: 20%;
`;
