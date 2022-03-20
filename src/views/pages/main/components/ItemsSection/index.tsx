import { itemsSectionData, mainSectionTitle } from 'views/pages/main/data';
import { ItemCard } from '../ItemCard';
import { Wrapper } from 'views/components/Wrapper';
import { Content, SectionTitle } from './styled';

export const ItemsSection: React.FC = () => {
  return (
    <Wrapper>
      <SectionTitle>{mainSectionTitle}</SectionTitle>
      <Content>
        {itemsSectionData.map(card => (
          <ItemCard cardData={card} key={card.id} />
        ))}
      </Content>
    </Wrapper>
  );
};
