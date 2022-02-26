import React from 'react';
import { Input } from './styled';

export const NameInput: React.FC<{ placeholder?: string }> = ({
  placeholder = 'Insert name here',
}) => {
  return (
    <>
      <Input type="text" placeholder={placeholder} />
    </>
  );
};
