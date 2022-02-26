import React from 'react';
import { NameInput } from '../NameInput';
import { SubmitButton } from '../SubmitButton';
import { FormWrapper } from './styled';
import { Modal } from '../Modal';

export const Form: React.FC = () => {
  const [modalIsOpen, setIsOpen] = React.useState(true);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(true);
  }

  return (
    <>
      <FormWrapper>
        <NameInput />
        <SubmitButton onClick={openModal} />
      </FormWrapper>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} />
    </>
  );
};
