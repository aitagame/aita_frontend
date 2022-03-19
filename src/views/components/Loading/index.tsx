import { Title } from '../Title';
import { LoadingWrapper } from './styled';

export const Loading: React.FC<{ overlay?: boolean; percent?: number }> = ({
  overlay = true,
  percent,
}) => {
  return (
    <LoadingWrapper overlay={overlay}>
      <Title>Loading ... {percent ? ' ${percent}%' : ''}</Title>
    </LoadingWrapper>
  );
};
