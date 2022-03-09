import { ElementName, ElementImage } from './styled';
import { Element } from 'views/types/profilePage';
import { SquareButton } from 'views/components/Button';

interface ElementTypeProps {
  elementData: Element;
  selected?: boolean;
  onClick?: (id: string) => void;
}

export const CharacterType: React.FC<ElementTypeProps> = ({ elementData, selected, onClick }) => {
  return (
    <SquareButton onClick={() => onClick && onClick(elementData.id)} active={selected}>
      <ElementImage src={elementData.url} />
      <ElementName>{elementData.name}</ElementName>
    </SquareButton>
  );
};
