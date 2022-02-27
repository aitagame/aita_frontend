import {
  BackgroundWrapper,
  ContentWrapper,
  FormWrapper,
  SubmitButtonStyled,
  Header,
} from './styled';
import React from 'react';
import { Input } from 'views/components/NameInput';
import { Modal } from 'views/components/Modal';

export const SubmitButton: React.FC<{ title?: string; onClick: () => void }> = ({
  title = 'Submit',
}) => {
  return <SubmitButtonStyled>{title}</SubmitButtonStyled>;
};

export const Form: React.FC = () => {
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
        <SubmitButton onClick={openModal} />
      </FormWrapper>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} />
    </>
  );
};

export const HelloWorld = () => {
  return (
    <BackgroundWrapper>
      <ContentWrapper>
        <Header>Hello there!</Header>
        <Form />
      </ContentWrapper>
    </BackgroundWrapper>
  );
};
