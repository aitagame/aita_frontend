import { useState } from 'react';
import { TabContent, TabPane, TabsPaneBox, TabsWrapper } from './styled';

export interface Tab {
  title: string;
  content: JSX.Element;
  id: string;
}

export const Tabs: React.FC<{ tabs: Tab[]; defaultTab?: Tab }> = ({ tabs, defaultTab }) => {
  const [selectedtab, setSelectedTab] = useState(defaultTab || tabs[0]);
  return (
    <TabsWrapper>
      <TabsPaneBox>
        {tabs.map(tab => (
          <TabPane
            key={`pane-${tab.id}`}
            selected={selectedtab.id === tab.id}
            onClick={() => setSelectedTab(tab)}
          >
            {tab.title}
          </TabPane>
        ))}
      </TabsPaneBox>
      <TabContent>{selectedtab.content}</TabContent>
    </TabsWrapper>
  );
};
