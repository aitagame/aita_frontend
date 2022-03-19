import { useRef, useState } from 'react';
import { useAuthValues } from 'views/hooks/useAuthValues';
import { useClickAwayListener } from 'views/hooks/useClickAwayListener';
import { ProfileIcon } from 'views/icons/ProfileIcon';
import { userStore } from 'views/store/user';
import { UserMenuListProps, UserMenuProps } from 'views/types/menu';
import { Color } from 'views/types/theme';
import { ClassElement } from '../ClassElement';
import { Title, TitleH2 } from '../Title';
import { ProfileInfo, UserMenuContent, UserMenuModal, UserMenuWrapper } from './styled';

export const UserMenuList: React.FC<UserMenuListProps> = ({
  profile,
  accountMethod,
  accountId,
  displayTheme = 'light',
}) => {
  const { balance } = userStore;
  const { signOut } = useAuthValues();

  const textColor: Color = displayTheme === 'dark' ? 'text' : 'textReverse';
  return (
    <UserMenuContent displayTheme={displayTheme}>
      <Title mb="1rem" color={textColor}>
        {accountMethod} - {accountId}
        {balance.dark}
      </Title>
      <ProfileInfo>
        {profile && <TitleH2 color={textColor}>{profile.name}</TitleH2>}
        {profile?.class && <ClassElement elementType={profile.class} />}
      </ProfileInfo>
      <button onClick={signOut}>
        <Title fz="1rem" color={textColor}>
          Log out
        </Title>
      </button>
    </UserMenuContent>
  );
};

export const UserMenu: React.FC<UserMenuProps> = ({ profile, accountId, accountMethod }) => {
  const [isOpened, setIsOpened] = useState(false);
  const menuRef = useRef(null);
  useClickAwayListener(menuRef, () => setIsOpened(false));

  return (
    <UserMenuWrapper ref={menuRef}>
      <button onClick={() => setIsOpened(opened => !opened)}>
        <ProfileIcon fill="white" />
      </button>
      <UserMenuModal isOpened={isOpened}>
        <UserMenuList
          displayTheme="light"
          profile={profile}
          accountId={accountId}
          accountMethod={accountMethod}
        />
      </UserMenuModal>
    </UserMenuWrapper>
  );
};
