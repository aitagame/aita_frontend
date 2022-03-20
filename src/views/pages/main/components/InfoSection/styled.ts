import styled from 'styled-components';
import { desktopDevice, tabletDevice } from 'views/theme/mediaQuery';

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  gap: ${({ theme }) => theme.gutter.small};

  ${tabletDevice} {
    grid-template-columns: 1fr 1fr;
  }

  ${desktopDevice} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const SectionTitle = styled.h5`
  font-size: ${({ theme }) => theme.fonts.sizes.title};
  margin-bottom: 0.5em;
  font-weight: 500;
`;
export const SectionText = styled.p`
  letter-spacing: 1px;
  line-height: 1.25;
  font-size: ${({ theme }) => theme.fonts.sizes.subtitle};
  margin-bottom: 2rem;
`;
