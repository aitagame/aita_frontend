import styled from 'styled-components';

export const LoadingWrapper = styled.div<{ overlay: boolean }>`
  background-color: ${({ theme, overlay }) =>
    `${theme.colors.backgroundPrimary}${overlay ? 'e5' : ''}`};
  position: ${({ overlay }) => overlay && 'absolute'};
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
