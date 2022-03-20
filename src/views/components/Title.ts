import styled, { css, DefaultTheme } from 'styled-components';
import { Color } from 'views/types/theme';

interface TypographyProps {
  fz?: string;
  mb?: string;
  color?: Color;
}
interface CommonStyleProps extends TypographyProps {
  theme: DefaultTheme;
}

const getCommonStyles = ({ theme, fz, mb, color = 'text' }: CommonStyleProps) => css`
  font-size: ${fz || '1.5rem'};
  margin-bottom: ${mb || 'initial'};
  color: ${theme.colors[color]};
  font-weight: 500;
`;

export const Title = styled.h5<TypographyProps>`
  ${({ theme, ...props }) => getCommonStyles({ theme, ...props })}
`;

export const TitleH1 = styled.h1<TypographyProps>`
  ${({ theme, fz, mb, color }) =>
    getCommonStyles({ theme, fz: fz || theme.fonts.sizes.title, mb, color })}
`;

export const TitleH2 = styled.h2<TypographyProps>`
  ${({ theme, fz, mb, color }) =>
    getCommonStyles({ theme, fz: fz || theme.fonts.sizes.subtitle, mb, color })}
`;

export const Label = styled.h2<TypographyProps>`
  ${({ theme, fz, mb, color }) =>
    getCommonStyles({ theme, fz: fz || theme.fonts.sizes.input, mb: mb || '0.5rem', color })}
`;
