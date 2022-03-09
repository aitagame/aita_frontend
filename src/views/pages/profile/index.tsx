import { useCallback, useContext, useMemo, useState } from 'react';
import { AuthContext } from 'views/context/Auth';
import { ElementsSection, NameDisplay, ProfileContent } from './styled';
import { Title, TitleH2 } from 'views/components/Title';
import { Wrapper } from 'views/components/Wrapper';
import { BaseLayout } from 'views/components/BaseLayout';
import { characterTypeElement } from './data';
import { CharacterType } from './component/ElementType/ElementInfo';
import { Profile as ProfileType } from 'views/types/user';
import { Button } from 'views/components/Button';
import { useNavigate } from 'react-router';

export const Profile: React.FC<{
  createProfile: (
    name: string,
    elementClass: string,
    callback: () => void
  ) => Generator<Promise<unknown>, void, ProfileType>;
}> = ({ createProfile }) => {
  const { values, profile } = useContext(AuthContext);
  const navigate = useNavigate();

  const [classToSave, setClassToSave] = useState('');
  const [profileName, setProfileName] = useState('');

  const selectedClass = useMemo(() => {
    const selectedElement = characterTypeElement.find(el => el.id === profile.class);
    return selectedElement ? <CharacterType selected elementData={selectedElement} /> : null;
  }, [profile.class]);

  const onProfileCreat = useCallback(() => {
    if (profile.id) {
      navigate('/play');
      return;
    }
    createProfile(profileName, classToSave, () => navigate('/play'));
  }, [classToSave, createProfile, navigate, profile.id, profileName]);

  const isExistingProfile = !!profile.id;

  return (
    <BaseLayout withMenu={false} withFooter={false} withPlayButton={false}>
      <Wrapper>
        <Title mb="3rem">{values?.accountId}</Title>
        {isExistingProfile ? (
          <Title mb="2rem">{profile.name}</Title>
        ) : (
          <NameDisplay
            value={profileName}
            onChange={e => setProfileName(e.target.value)}
            placeholder="Your profile name"
          />
        )}
        <ProfileContent>
          {!isExistingProfile && <TitleH2 mb="1.5rem">Select Class Type</TitleH2>}

          <ElementsSection>
            {profile.class
              ? selectedClass
              : characterTypeElement.map(el => (
                  <CharacterType
                    elementData={el}
                    key={el.id}
                    selected={classToSave === el.id}
                    onClick={setClassToSave}
                  />
                ))}
          </ElementsSection>
          <Button
            disabled={Boolean(!profile.name && profileName.length === 0)}
            onClick={onProfileCreat}
          >
            Start Game
          </Button>
        </ProfileContent>
      </Wrapper>
    </BaseLayout>
  );
};
