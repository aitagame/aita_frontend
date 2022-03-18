import { ElementId } from 'views/types/classElement';
import { elementTypes } from './data';
import { ElementImage } from './styled';

interface ClassElementProps {
  elementType: ElementId;
}

export const ClassElement: React.FC<ClassElementProps> = ({ elementType }) => {
  return <ElementImage image={elementTypes[elementType].url} elementType={elementType} />;
};
