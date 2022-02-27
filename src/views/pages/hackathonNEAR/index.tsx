import { FormWrapper, HackathonWrapper, FormInput } from './styled';
import { TitleH1 } from 'views/components/Title';
import { useState } from 'react';
import { Button } from 'views/components/Button';
import { HackathonModal, HackathonModalStatus } from './components/HackathonModal';
import { useNear } from 'views/hooks/useNear';

export const Hackathon = () => {
  const { contract } = useNear();
  const [name, setName] = useState('');
  const [modalStatus, setModalStatus] = useState<HackathonModalStatus | null>(null);

  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    try {
      await (contract as any).hello({ name });
      setModalStatus('success');
    } catch (e) {
      setModalStatus('error');
    }
  };

  const closeModal = () => {
    setModalStatus(null);
  };

  return (
    <>
      <HackathonWrapper>
        <TitleH1>Hello there!</TitleH1>
        <FormWrapper>
          <FormInput
            value={name}
            onChange={e => setName(e.target.value.trim())}
            placeholder="Insert name here"
          />
          <Button size="large" onClick={onSubmit} type="submit" disabled={!name}>
            Submit
          </Button>
        </FormWrapper>
      </HackathonWrapper>
      {modalStatus && <HackathonModal onClose={closeModal} status={modalStatus} name={name} />}
    </>
  );
};
