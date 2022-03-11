import styled, { css, keyframes } from 'styled-components';

const earthPlay = keyframes`
100% {
  background-position: -188px;
}
`;
const firePlay = keyframes`
100% {
  background-position: -248px;
}
`;
const waterPlay = keyframes`
100% {
  background-position: -164px;
}
`;
const airPlay = keyframes`
100% {
  background-position: -180px;
}
`;

export const ElementImage = styled.div<{ image: string; elementType: string }>`
  width: 56px;
  height: 56px;
  background-image: ${({ image }) => `url(${image})`};
  animation-name: ${({ elementType }) => {
    switch (elementType) {
      case 'terrestrial':
        return css`
          ${earthPlay}
        `;
      case 'air':
        return css`
          ${airPlay}
        `;
      case 'inferno':
        return css`
          ${firePlay}
        `;
      case 'aqua':
        return css`
          ${waterPlay}
        `;
    }
  }};
  background-repeat: no-repeat;
  animation-duration: 1s;
  animation-timing-function: steps(4);
  animation-iteration-count: infinite;
`;
