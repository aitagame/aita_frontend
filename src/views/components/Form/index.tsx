import { NameInput } from '../NameInput';
import { SubmitButton } from '../SubmitButton';
import { FormWrapper } from './styled';

export const Form: React.FC = () => {
  return (
    <FormWrapper>
      <NameInput />
      <SubmitButton />
    </FormWrapper>
  );
};
