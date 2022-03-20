import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { AuthContext } from 'views/context/Auth';
import {
  AccountBalance,
  AccountInfo,
  DarkCristalImage,
  ElementsSection,
  NameDisplay,
  ProfileContent,
  ProfileInfo,
  ProfileName,
} from './styled';
import { Title, TitleH2 } from 'views/components/Title';
import { Wrapper } from 'views/components/Wrapper';
import { BaseLayout } from 'views/components/BaseLayout';
import { CharacterType } from './component/ElementType/ElementInfo';
import { Button } from 'views/components/Button';
import { useNavigate } from 'react-router';
import { elementTypes } from 'views/components/ClassElement/data';
import { ElementId } from 'views/types/classElement';
import { userStore } from 'views/store/user';
import { Loading } from 'views/components/Loading';
import darkCrystal from 'views/assets/darkCrystal.png';
import { ClassElement } from 'views/components/ClassElement';

export const Profile: React.FC = () => {
  const { createProfile, profileCreating, balance } = userStore;
  const { values, profile } = useContext(AuthContext);
  const navigate = useNavigate();

  const [selectedClass, setSelectedClass] = useState('');
  const [profileName, setProfileName] = useState('');

  useEffect(() => {
    profile.class && setSelectedClass(profile.class);
    setProfileName(profile.name);
  }, [profile]);

  const profileClass = useMemo(() => {
    const selectedElement = profile.class && elementTypes[profile.class];
    return selectedElement ? <ClassElement elementType={selectedElement.id} /> : null;
  }, [profile.class]);

  const onProfileCreat = useCallback(() => {
    if (profile.id) {
      navigate('/play');
      return;
    }
    createProfile(profileName, selectedClass, () => navigate('/play'));
  }, [selectedClass, createProfile, navigate, profile.id, profileName]);

  const isExistingProfile = !!profile.id;

  return (
    <BaseLayout>
      <Wrapper>
        <AccountInfo>
          <Title>{values?.accountId}</Title>
          <AccountBalance>
            <DarkCristalImage src={darkCrystal} />
            {balance.dark}
          </AccountBalance>
        </AccountInfo>
        {isExistingProfile ? (
          <ProfileInfo>
            <ProfileName>{profileName}</ProfileName>
            {profileClass}
          </ProfileInfo>
        ) : (
          <NameDisplay
            value={profileName}
            onChange={e => setProfileName(e.target.value)}
            placeholder="Your profile name"
          />
        )}
        <ProfileContent>
          {!isExistingProfile && <TitleH2 mb="1.5rem">Choose your class</TitleH2>}
          <ElementsSection>
            {!profile.class &&
              Object.keys(elementTypes).map(key => (
                <CharacterType
                  elementData={elementTypes[key as ElementId]}
                  key={key}
                  selected={selectedClass === key}
                  onClick={setSelectedClass}
                />
              ))}
          </ElementsSection>
          {!profile.id && (
            <Button
              disabled={Boolean((!isExistingProfile && profileName.length === 0) || !selectedClass)}
              onClick={onProfileCreat}
            >
              Create profile
            </Button>
          )}
        </ProfileContent>
      </Wrapper>
      {profileCreating && <Loading />}
    </BaseLayout>
  );
};
