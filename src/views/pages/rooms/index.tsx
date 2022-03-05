import { BaseLayout } from 'views/components/BaseLayout';
import { Tabs } from './components/Tabs';
import { RoomsWrapper, ContentWrapper } from './styled';
import { RoomsList } from './components/RoomList';

const tabs = [
  { title: 'Main', content: <div>main</div>, id: 'main' },
  { title: 'Rooms', content: <RoomsList />, id: 'playRooms' },
  { title: 'Market', content: <ContentWrapper>Coming Soon</ContentWrapper>, id: 'market' },
  {
    title: 'Achievements',
    content: <ContentWrapper>Coming Soon</ContentWrapper>,
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
