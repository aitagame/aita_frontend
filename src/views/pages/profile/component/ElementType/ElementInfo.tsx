import { ElementName } from './styled';
import { Element } from 'views/types/classElement';
import { SquareButton } from 'views/components/Button';
import { ClassElement } from 'views/components/ClassElement';

interface ElementTypeProps {
  elementData: Element;
  selected?: boolean;
  onClick?: (id: string) => void;
}

export const CharacterType: React.FC<ElementTypeProps> = ({ elementData, selected, onClick }) => {
  return (
    <SquareButton onClick={() => onClick && onClick(elementData.id)} active={selected}>
      <ClassElement elementType={elementData.id} />
      <ElementName>{elementData.name}</ElementName>
    </SquareButton>
  );
};
