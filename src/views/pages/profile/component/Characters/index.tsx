import { SelectCharacter, SubHeader, Wrapper, StartGameButton } from './styled';
import { WaterElement } from './Water';
import { EarthElement } from './Earth';
import { FireElement } from './Fire';
import { AirElement } from './Air';

export const CharacterSelection = () => {
  return (
    <Wrapper>
      <SubHeader>Select Class Type</SubHeader>
      <SelectCharacter>
        <WaterElement />
        <EarthElement />
        <FireElement />
        <AirElement />
      </SelectCharacter>
      <StartGameButton>Start Game</StartGameButton>
    </Wrapper>
  );
};
