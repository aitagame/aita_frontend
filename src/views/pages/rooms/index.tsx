import { BaseLayout } from 'views/components/BaseLayout';
import { Button } from 'views/components/Button';
import { TitleH2 } from 'views/components/Title';
import { RoomItem, RoomsWrapper } from './styled';

const rooms = {
  friendly: {
    title: 'Friendly Game',
  },
  normal: {
    title: 'Normal Game',
  },
  rating: {
    title: 'A Rating Game',
  },
};

export const Rooms = () => {
  return (
    <BaseLayout>
      <RoomsWrapper>
        {Object.values(rooms).map((room, index) => (
          <RoomItem key={`room-${index}`}>
            <TitleH2 mb="2rem" color="primary">
              {room.title}
            </TitleH2>
            <Button color="primary" shape="square">
              Join
            </Button>
          </RoomItem>
        ))}
      </RoomsWrapper>
    </BaseLayout>
  );
};
