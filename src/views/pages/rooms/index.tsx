import { BaseLayout } from 'views/components/BaseLayout';
import { Tabs } from './components/Tabs';
import { RoomsWrapper } from './styled';
import { RoomsList } from './components/RoomList';
import { Hackathon } from '../hackathonNEAR';
import { ComingSoon } from './components/ComingSoon';

const tabs = [
  { title: 'Profile', content: <Hackathon />, id: 'profile' },
  { title: 'Rooms', content: <RoomsList />, id: 'playRooms' },
  { title: 'Rating', content: <ComingSoon />, id: 'rating' },
  {
    title: 'Achievements',
    content: <ComingSoon />,
    id: 'achievements',
  },
];

export const Rooms = () => {
  return (
    <BaseLayout withMenu={false} withFooter={false} withPlayButton={false}>
      <RoomsWrapper>
        <Tabs tabs={tabs} defaultTab={tabs[1]} />
      </RoomsWrapper>
    </BaseLayout>
  );
};
