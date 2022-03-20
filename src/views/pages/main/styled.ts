import styled from 'styled-components';
import { desktopDevice } from 'views/theme/mediaQuery';

export const PromoWrapper = styled.div<{ background: string }>`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  background-image: ${({ background }) => `url(${background})`};
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  position: relative;
`;

export const PromoContent = styled.div`
  position: absolute;
  top: 40vh;
  width: 100%;
  text-align: center;
  ${desktopDevice} {
    top: 70vh;
  }
`;

export const PromoTitle = styled.h1`
  color: #232323;
  font-size: ${({ theme }) => theme.fonts.sizes.title};
  padding-bottom: 1rem;
`;
