import { useContext, useMemo, useState } from 'react';
import { AuthContext } from 'views/context/Auth';
import { ElementsSection, NameDisplay, ProfileContent } from './styled';
import { Title, TitleH2 } from 'views/components/Title';
import { Wrapper } from 'views/components/Wrapper';
import { BaseLayout } from 'views/components/BaseLayout';
import { PlayGameButton } from 'views/components/PlayGameButton';
import { characterTypeElement } from './data';
import { CharacterType } from './component/ElementType/ElementInfo';

export const Profile = () => {
  const { values, profile } = useContext(AuthContext);
  const [classToSave, setClassToSave] = useState('');
  const [profileName, setProfileName] = useState('');

  const selectedClass = useMemo(() => {
    const selectedElement = characterTypeElement.find(el => el.id === profile.class);
    return selectedElement ? <CharacterType selected elementData={selectedElement} /> : null;
  }, [profile.class]);

  return (
    <BaseLayout withMenu={false} withFooter={false} withPlayButton={false}>
      <Wrapper>
        <Title>{values?.accountId}</Title>
        {profile.name ? (
          <Title>{profile.name}</Title>
        ) : (
          <NameDisplay
            value={profileName}
            onChange={e => setProfileName(e.target.value)}
            placeholder="Your profile name"
          />
        )}
        <ProfileContent>
          <TitleH2 mb="1.5rem">Select Class Type</TitleH2>
          {profile.class ? (
            selectedClass
          ) : (
            <ElementsSection>
              {characterTypeElement.map(el => (
                <CharacterType
                  elementData={el}
                  key={el.id}
                  selected={classToSave === el.id}
                  onClick={setClassToSave}
                />
              ))}
            </ElementsSection>
          )}
          <PlayGameButton
            disabled={Boolean(!profile.name && profileName.length === 0)}
            title="Start Game"
          />
        </ProfileContent>
      </Wrapper>
    </BaseLayout>
  );
};
