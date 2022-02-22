import styled from 'styled-components';

export const Title = styled.h5<{ fz?: string; mb?: string }>`
  font-size: ${({ fz }) => fz || '1.5rem'};
  margin-bottom: ${({ mb }) => mb || 'initial'};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
`;

export const TitleH1 = styled.h1<{ fz?: string; mb?: string }>`
  font-size: ${({ theme, fz }) => fz || theme.fonts.sizes.title};
  margin-bottom: ${({ mb }) => mb || 'initial'};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
`;
export const TitleH2 = styled.h1<{ fz?: string; mb?: string }>`
  font-size: ${({ theme, fz }) => fz || theme.fonts.sizes.subtitle};
  margin-bottom: ${({ mb }) => mb || 'initial'};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
`;
