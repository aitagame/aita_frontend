import { BaseLayout } from 'views/components/BaseLayout';
import { RoomsList } from './components/RoomList';
import { Wrapper } from 'views/components/Wrapper';

export const Rooms = () => {
  return (
    <BaseLayout withMenu={false} withFooter={false} withPlayButton={false}>
      <Wrapper>
        <RoomsList />
      </Wrapper>
    </BaseLayout>
  );
};
