import { NameInput } from '../NameInput';
import { SubmitButton } from '../SubmitButton';
import { FormWrapper } from './styled';
import { Modal } from '../Modal';

export const Form: React.FC = () => {
  return (
    <>
      <FormWrapper>
        <NameInput />
        <SubmitButton />
      </FormWrapper>
      <Modal />
    </>
  );
};
