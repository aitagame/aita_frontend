import { FormWrapper, HackathonWrapper, FormInput } from './styled';
import { TitleH1 } from 'views/components/Title';
import { useState } from 'react';
import { Button } from 'views/components/Button';
import { HackathonModal, HackathonModalStatus } from './components/HackathonModal';
import { useNear } from 'views/hooks/useNear';
import { AppLink } from 'views/components/AppLink';

export const Hackathon = () => {
  const { contract } = useNear();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [modalStatus, setModalStatus] = useState<HackathonModalStatus | null>(null);

  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response = await (contract as any).hello({ name });
      setModalStatus('success');
      setMessage(response);
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
        <AppLink to="nft">Mint NFT</AppLink>
      </HackathonWrapper>
      {modalStatus && (
        <HackathonModal onClose={closeModal} status={modalStatus} message={message} />
      )}
    </>
  );
};
