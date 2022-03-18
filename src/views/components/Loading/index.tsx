import { Title } from '../Title';
import { LoadingWrapper } from './styled';

export const Loading: React.FC<{ overlay?: boolean }> = ({ overlay = true }) => {
  return (
    <LoadingWrapper overlay={overlay}>
      <Title>Loading ...</Title>
    </LoadingWrapper>
  );
};
