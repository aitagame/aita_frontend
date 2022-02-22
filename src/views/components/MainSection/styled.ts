import styled from 'styled-components';
import { desktopDevice } from 'views/theme/mediaQuery';
import { Wrapper } from '../Wrapper';

export const MainSectionWrapper = styled(Wrapper)<{ reverse?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme, reverse }) => reverse && theme.colors.backgroundSecondary};
  gap: ${({ theme }) => theme.gutter.medium};

  ${desktopDevice} {
    flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  }
`;

export const SectionImage = styled.span`
  width: 100%;
  height: 40vmin;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  ${desktopDevice} {
    width: 40vw;
  }
`;

export const Content = styled.section`
  width: 100%;
  text-align: center;
  ${desktopDevice} {
    width: 60vw;
    text-align: left;
  }
`;

export const SectionTitle = styled.h5`
  font-size: ${({ theme }) => theme.fonts.sizes.subtitle};
  margin-bottom: 0.5em;
  font-weight: 500;
`;
export const SectionText = styled.p`
  letter-spacing: 1px;
`;
