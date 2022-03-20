import { useRef, useState } from 'react';
import { useAuthValues } from 'views/hooks/useAuthValues';
import { useClickAwayListener } from 'views/hooks/useClickAwayListener';
import { ProfileIcon } from 'views/icons/ProfileIcon';
import { userStore } from 'views/store/user';
import { UserMenuListProps, UserMenuProps } from 'views/types/menu';
import { Color } from 'views/types/theme';
import { ClassElement } from '../ClassElement';
import { Title, TitleH2 } from '../Title';
import {
  AccountInfo,
  Balance,
  DarkCrystalIcon,
  ProfileInfo,
  UserMenuContent,
  UserMenuModal,
  UserMenuWrapper,
} from './styled';
import darkCrystal from 'views/assets/darkCrystal.png';

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
      <AccountInfo>
        <Title fz="1rem" color={textColor}>
          {accountMethod} - {accountId}
        </Title>
        <Balance>
          <DarkCrystalIcon src={darkCrystal} />
          {balance.dark}
        </Balance>
      </AccountInfo>
      <ProfileInfo>
        {profile && (
          <TitleH2 fz="1.5rem" color={textColor}>
            {profile.name}
          </TitleH2>
        )}
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
