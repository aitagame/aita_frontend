import styled, { css } from 'styled-components';

interface ButtonProps {
  size?: 'medium' | 'large';
}

const largeButtonStyle = css`
  width: 100%;
  padding: 1rem;
  border-radius: 2rem;
  font-size: 1.5rem;
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
  }
  :disabled {
    background-color: ${({ theme }) => theme.colors.secondaryLight};
    opacity: 0.6;
    cursor: initial;
  }

  ${({ size = 'medium' }) => size === 'large' && largeButtonStyle}
`;
