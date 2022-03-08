import styled from 'styled-components';
import { desktopDevice } from 'views/theme/mediaQuery';

export const ElementImage = styled.img`
  width: 15vmax;
  max-height: 210px;
  object-fit: contain;

  ${desktopDevice} {
    width: 10vmax;
    max-width: 100%;
  }
`;

export const ElementName = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin: 0.5rem 0;
`;
