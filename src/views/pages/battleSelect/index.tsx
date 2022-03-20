import { BaseLayout } from 'views/components/BaseLayout';
import { TitleH2 } from 'views/components/Title';
import { RoomItem, RoomsWrapper } from './styled';
import { Button } from 'views/components/Button';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const onPlay = useCallback(() => {
    navigate('/play');
  }, [navigate]);

  return (
    <BaseLayout>
      <RoomsWrapper withGap>
        {Object.values(options).map((room, index) => (
          <RoomItem key={`room-${index}`}>
            <TitleH2 mb="2rem" color="primary">
              {room.title}
            </TitleH2>
            <Button color="primary" shape="square" onClick={onPlay}>
              Join
            </Button>
          </RoomItem>
        ))}
      </RoomsWrapper>
    </BaseLayout>
  );
};
