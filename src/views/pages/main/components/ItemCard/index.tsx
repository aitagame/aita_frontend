import { MouseEventHandler } from 'react';
import { SectionItem } from 'views/types/mainPage';
import { ItemCardWrapper, SectionTitle, SectionText, ItemDescription, ItemImage } from './styled';

interface ItemCardProps {
  cardData: SectionItem;
  onClick?: MouseEventHandler;
}

export const ItemCard: React.FC<ItemCardProps> = ({ cardData, onClick }) => {
  return (
    <ItemCardWrapper onClick={onClick}>
      {cardData.url && <ItemImage src={cardData.url} />}
      <ItemDescription>
        <SectionTitle>{cardData.title}</SectionTitle>
        <SectionText>{cardData.text}</SectionText>
      </ItemDescription>
    </ItemCardWrapper>
  );
};
