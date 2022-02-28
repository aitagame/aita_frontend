import { SelectCharacter, SubHeader, Wrapper } from './styled';
import { WaterElement } from './Water';

export const CharacterSelection = () => {
  return (
    <Wrapper>
      <SubHeader>Select Class Type</SubHeader>
      <SelectCharacter>
        <WaterElement />
      </SelectCharacter>
    </Wrapper>
  );
};
