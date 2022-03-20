import { BaseLayout } from 'views/components/BaseLayout';
import { PlayGameButton } from 'views/components/PlayGameButton';
import { TitleH2 } from 'views/components/Title';
import { RoomItem, RoomsWrapper } from './styled';

const options = {
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

export const BattleSelect = () => {
  return (
    <BaseLayout>
      <RoomsWrapper withGap>
        {Object.values(options).map((room, index) => (
          <RoomItem key={`room-${index}`}>
            <TitleH2 mb="2rem" color="text">
              {room.title}
            </TitleH2>
            <PlayGameButton title="Join" />
          </RoomItem>
        ))}
      </RoomsWrapper>
    </BaseLayout>
  );
};
