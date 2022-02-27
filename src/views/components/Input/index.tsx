import React from 'react';
import styled from 'styled-components';
import { desktopDevice } from 'views/theme/mediaQuery';

export const StyledInput = styled.input`
  text-align: center;
  font-size: 1.25rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 2.5rem;
  width: 55%;
  margin: auto;
  ::placeholder {
    color: #c4c4c4;
  }
  ${desktopDevice} {
    width: 27rem;
  }
`;

export const Input: React.FC<{ placeholder?: string; type?: string }> = ({
  placeholder = 'Insert name here',
}) => {
  return (
    <>
      <StyledInput type="text" placeholder={placeholder} />
    </>
  );
};
