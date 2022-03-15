import styled, { css } from 'styled-components';
import { desktopDevice } from 'views/theme/mediaQuery';

interface ButtonProps {
  size?: 'medium' | 'large';
  active?: boolean;
  color?: 'primary' | 'secondary';
  shape?: 'round' | 'square';
}

const largeButtonStyle = css`
  width: 100%;
  padding: 1rem;
  font-size: 1.5rem;
`;

const activeButton = css`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: ${({ theme }) => `inset 0 0 20px 1px ${theme.colors.secondary}`};
`;

const primaryButton = css`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  :hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.textReverse};
  }
`;

const secondaryButton = css`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.textReverse};
  :hover {
    background-color: ${({ theme }) => theme.colors.secondaryLight};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Button = styled.button<ButtonProps>`
  ${({ color = 'secondary' }) => (color === 'primary' ? primaryButton : secondaryButton)}
  border-radius: ${({ shape = 'round' }) => (shape === 'round' ? '2rem' : '0.2rem')};
  padding: 0.5rem 1rem;
  :hover {
    ${({ active }) => active && activeButton}
  }
  :disabled {
    background-color: ${({ theme }) => theme.colors.secondaryLight};
    opacity: 0.6;
    cursor: initial;
  }

  ${({ active }) => active && activeButton}

  ${({ size = 'medium' }) => size === 'large' && largeButtonStyle}
`;

export const SquareButton = styled(Button)`
  width: 30rem;
  max-width: 100%;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  svg {
    width: 5vmax;
    height: 5vmax;
  }

  ${desktopDevice} {
    flex-direction: column;
    width: 14vmax;
    height: 15vmax;
    max-width: 14vmax;
  }
`;
