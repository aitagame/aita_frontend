import { CharacterType } from '../ElementType/ElementInfo';
import { SelectCharacter, SubHeader, ButtonWrapper } from './styled';
import { characterTypeElement } from 'views/pages/profile/data';
import { Wrapper } from 'views/components/Wrapper';
import { PlayGameButton } from 'views/components/PlayGameButton';

export const CharacterSelection = () => {
  return (
    <Wrapper>
      <SubHeader mb="1.5rem">Select Class Type</SubHeader>
      <SelectCharacter>
        {characterTypeElement.map(el => (
          <CharacterType elementData={el} key={el.id} />
        ))}
      </SelectCharacter>
      <ButtonWrapper>
        <PlayGameButton title="Start Game" />
      </ButtonWrapper>
    </Wrapper>
  );
};
