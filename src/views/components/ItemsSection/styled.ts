import styled from 'styled-components';
import { desktopDevice } from 'views/theme/mediaQuery';
import { ItemCardWrapper } from '../ItemCard/styled';

export const Content = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.gutter.medium};
  flex-direction: column;

  ${desktopDevice} {
    flex-direction: row;
    ${ItemCardWrapper} {
      max-width: 25%;
    }
  }
`;

export const SectionTitle = styled.h5`
  font-size: ${({ theme }) => theme.fonts.sizes.title};
  margin-bottom: 0.5em;
  font-weight: 500;
`;
