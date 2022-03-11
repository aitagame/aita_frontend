import { BaseLayout } from 'views/components/BaseLayout';
import { Wrapper } from 'views/components/Wrapper';

export const Rooms = () => {
  return (
    <BaseLayout withMenu={false} withFooter={false} withPlayButton={false}>
      <Wrapper></Wrapper>
    </BaseLayout>
  );
};
