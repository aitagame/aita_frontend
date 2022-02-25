import { SubmitButtonStyled } from './styled';

export const SubmitButton: React.FC<{ title?: string }> = ({ title = 'Submit' }) => {
  return <SubmitButtonStyled>{title}</SubmitButtonStyled>;
};
