import { CharacterTypeWrapper, ElementName, ElementImage } from './styled';
import { Element } from 'views/types/profilePage';

interface ElementTypeProps {
  elementData: Element;
}

export const CharacterType: React.FC<ElementTypeProps> = ({ elementData }) => {
  return (
    <CharacterTypeWrapper>
      <ElementImage src={elementData.url} />
      <ElementName>{elementData.name}</ElementName>
    </CharacterTypeWrapper>
  );
};
