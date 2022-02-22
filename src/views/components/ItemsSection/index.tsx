import { itemsSectionData, mainSectionTitle } from 'views/data/main';
import { ItemCard } from '../ItemCard';
import { Wrapper } from '../Wrapper';
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
