import React from 'react';
import { StyledInput } from './styled';

export const Input: React.FC<{ placeholder?: string; type?: string }> = ({
  placeholder = 'Insert name here',
}) => {
  return (
    <>
      <StyledInput type="text" placeholder={placeholder} />
    </>
  );
};
