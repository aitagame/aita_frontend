import { BaseLayout } from 'views/components/BaseLayout';
import { Market } from '../market';
import { Tabs } from './components/Tabs';
import { RoomsWrapper } from './styled';

const tabs = [
  { title: 'Main', content: <div>main</div>, id: 'main' },
  { title: 'Rooms', content: <div>playRrooms</div>, id: 'playRooms' },
  { title: 'Market', content: <Market />, id: 'market' },
  { title: 'Achievements', content: <div>Achievements</div>, id: 'achievements' },
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
