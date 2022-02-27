import { FormWrapper, HackathonWrapper, FormInput } from './styled';
import { TitleH1 } from 'views/components/Title';
import { useState } from 'react';
import { Button } from 'views/components/Button';
import { HackathonModal } from './components/HackathonModal';

export const Hackathon = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <HackathonWrapper>
        <TitleH1>Hello there!</TitleH1>
        <FormWrapper>
          <FormInput placeholder="Insert name here" />
          <Button size="large" onClick={openModal}>
            Submit
          </Button>
        </FormWrapper>
      </HackathonWrapper>
      {modalIsOpen && <HackathonModal onClose={closeModal} />}
    </>
  );
};
