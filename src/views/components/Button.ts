import styled, { css } from 'styled-components';
import { desktopDevice } from 'views/theme/mediaQuery';

interface ButtonProps {
  size?: 'medium' | 'large';
  active?: boolean;
}

const largeButtonStyle = css`
  width: 100%;
  padding: 1rem;
  border-radius: 2rem;
  font-size: 1.5rem;
`;

const activeButton = css`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: ${({ theme }) => `inset 0 0 20px 1px ${theme.colors.secondary}`};
`;

export const Button = styled.button<ButtonProps>`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.textReverse};
  border: 0;
  border-radius: 2rem;
  outline: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  :hover {
    background-color: ${({ theme }) => theme.colors.secondaryLight};
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
