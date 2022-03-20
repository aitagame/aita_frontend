import styled from 'styled-components';
import { desktopDevice } from 'views/theme/mediaQuery';

export const Content = styled.section`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => `2rem ${theme.gutter.small}`};
  background-color: rgba(255, 255, 255, 0.3);
  opacity: 0;
  transition: opacity 0.3s linear;
  overflow: auto;
  box-shadow: ${({ theme }) => `inset 0 0 80px 20px ${theme.colors.backgroundPrimary}`};

  ${desktopDevice} {
    padding: ${({ theme }) => `2rem ${theme.gutter.medium}`};
  }
`;

export const InfoCardWrapper = styled.div<{ background: string }>`
  height: 30vw;
  min-height: 488px;
  background-image: ${({ background }) => `url(${background})`};
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  box-shadow: ${({ theme }) => `inset 0 0 80px 30px ${theme.colors.backgroundPrimary}`};
  &:hover ${Content} {
    opacity: 1;
  }
`;

export const SectionTitle = styled.h5`
  font-size: 1.2rem;
  margin-bottom: 0.5em;
  color: ${({ theme }) => theme.colors.textReverse};
`;
export const SectionText = styled.p`
  letter-spacing: 1px;
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.textReverse};
`;
