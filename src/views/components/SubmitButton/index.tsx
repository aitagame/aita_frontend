import { SubmitButtonStyled } from './styled';

export const SubmitButton: React.FC<{ title?: string; onClick: () => void }> = ({
  title = 'Submit',
}) => {
  return <SubmitButtonStyled>{title}</SubmitButtonStyled>;
};
