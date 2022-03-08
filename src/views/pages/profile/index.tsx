import { CharacterSelection } from './component/Characters';
import { UserName, ProfileContentWrapper, CreateCharacterWrapper, NameDisplay } from './styled';

export const Profile = () => {
  return (
    <ProfileContentWrapper>
      <UserName>userName.near</UserName>
      <CreateCharacterWrapper>
        <NameDisplay placeholder="Display Name" />
        <CharacterSelection />
      </CreateCharacterWrapper>
    </ProfileContentWrapper>
  );
};
