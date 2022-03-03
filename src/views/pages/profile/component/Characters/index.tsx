import { CharacterType } from '../ElementType/ElementInfo';
import { SelectCharacter, SubHeader } from './styled';
import { characterTypeElement } from 'views/pages/profile/data';
import { Wrapper } from 'views/components/Wrapper';
import { PlayGameButton } from 'views/components/PlayGameButton';

export const CharacterSelection = () => {
  return (
    <Wrapper>
      <SubHeader mb="3rem">Select Class Type</SubHeader>
      <SelectCharacter>
        {characterTypeElement.map(el => (
          <CharacterType elementData={el} key={el.id} />
        ))}
      </SelectCharacter>
      <PlayGameButton>Start Game</PlayGameButton>
    </Wrapper>
  );
};
