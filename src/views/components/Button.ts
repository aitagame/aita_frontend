import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.textReverse};
  border: 0;
  border-radius: 0.6rem;
  outline: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`
