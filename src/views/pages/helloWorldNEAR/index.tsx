import {
  BackgroundWrapper,
  ContentWrapper,
  FormWrapper,
  SubmitButtonStyled,
  Header,
} from './styled';
import React from 'react';
import { Input } from 'views/components/Input';
import { Modal } from 'views/components/Modal';

export const Form: React.FC<{ title?: string }> = ({ title = 'Submit' }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <FormWrapper>
        <Input />
        <SubmitButtonStyled onClick={openModal}>{title}</SubmitButtonStyled>
      </FormWrapper>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} />
    </>
  );
};

export const HelloWorld = () => {
  return (
    <BackgroundWrapper>
      <ContentWrapper>
        <Header fz="2rem">Hello there!</Header>
        <Form />
      </ContentWrapper>
    </BackgroundWrapper>
  );
};
