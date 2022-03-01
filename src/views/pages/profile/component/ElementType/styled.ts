import styled from 'styled-components';
import { desktopDevice } from 'views/theme/mediaQuery';
import { Button } from 'views/components/Button';

export const ElementImage = styled.img`
  width: 15vmax;
  max-height: 210px;
  object-fit: contain;

  ${desktopDevice} {
    width: 10vmax;
    max-width: 100%;
  }
`;

export const CharacterTypeWrapper = styled(Button)`
  width: 30rem;
  max-width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.text};

  :hover {
    box-shadow: ${({ theme }) => `inset 0 0 20px 20px ${theme.colors.secondary}`};
  }
  :active {
    box-shadow: ${({ theme }) => `inset 0 0 20px 20px ${theme.colors.secondary}`};
    opacity: 0.6;
    cursor: initial;
  }

  ${desktopDevice} {
    flex-direction: column;
    justify-content: center;
    width: 14vmax;
    height: 18vmax;
    max-width: 14vmax;
  }
`;

export const ElementName = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin: 0.5rem 0;
`;
