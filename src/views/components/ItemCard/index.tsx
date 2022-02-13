import { SectionItem } from 'views/types/mainPage'
import { ItemCardWrapper, SectionTitle, SectionText, ItemImage } from './styled'

interface ItemCardProps {
  cardData: SectionItem
}

export const ItemCard: React.FC<ItemCardProps> = ({ cardData }) => {
  return (
    <ItemCardWrapper>
      <ItemImage src={cardData.url} />
      <SectionTitle>{cardData.title}</SectionTitle>
      <SectionText>{cardData.text}</SectionText>
    </ItemCardWrapper>
  )
}
