import styled from 'styled-components';

export const Input = styled.input`
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.sizes.input};
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 40px;
  width: 100%;
  ::placeholder {
    color: ${({ theme }) => theme.colors.textDisabled};
  }
`;
