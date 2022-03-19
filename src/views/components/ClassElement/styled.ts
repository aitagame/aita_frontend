import styled, { keyframes } from 'styled-components';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const data: Record<string, any> = {
  inferno: {
    frameWidth: 62,
    frameHeight: 43,
    shightX: 0,
  },
  aqua: {
    frameWidth: 41,
    frameHeight: 32,
    shightX: -6,
  },
  air: {
    frameWidth: 45,
    frameHeight: 45,
    shightX: 0,
  },
  terrestrial: {
    frameWidth: 47,
    frameHeight: 43,
    shightX: 0,
  },
};

export const ElementImage = styled.div<{ image: string; elementType: string }>`
  width: ${({ elementType }) => data[elementType].frameWidth + 'px'};
  height: ${({ elementType }) => data[elementType].frameHeight + 'px'};
  transform: scale(2.5) ${({ elementType }) => `translate(${data[elementType].shightX + 'px'})`};
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  animation-duration: 0.57s;
  animation-timing-function: steps(4);
  animation-iteration-count: infinite;
  animation-name: ${({ elementType }) => {
    return keyframes`
    100% {
      background-position: ${-data[elementType].frameWidth * 4 + 'px'};
    }
  `;
  }};
`;
