import { CharacterType } from '../ElementType/ElementInfo';
import { SelectCharacter, SubHeader, Wrapper, StartGameButton } from './styled';
import { characterTypeElement } from 'views/pages/profile/data';

export const CharacterSelection = () => {
  return (
    <Wrapper>
      <SubHeader>Select Class Type</SubHeader>
      <SelectCharacter>
        {characterTypeElement.map(el => (
          <CharacterType elementData={el} key={el.id} />
        ))}
      </SelectCharacter>
      <StartGameButton>Start Game</StartGameButton>
    </Wrapper>
  );
};
