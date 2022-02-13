import { itemsSectionData, mainSectionTitle } from 'views/data/main'
import { ItemCard } from '../ItemCard'
import { ItemsSectionWrapper, Content, SectionTitle } from './styled'

export const ItemsSection: React.FC = () => {
  return (
    <ItemsSectionWrapper>
      <SectionTitle>{mainSectionTitle}</SectionTitle>
      <Content>
        {itemsSectionData.map(card => (
          <ItemCard cardData={card} key={card.id} />
        ))}
      </Content>
    </ItemsSectionWrapper>
  )
}
