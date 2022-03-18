import { AuthMethod } from './auth';
import { Profile } from './user';

export interface UserMenuProps {
  profile?: Profile;
  accountMethod?: AuthMethod;
  accountId?: string;
}

export type UserMenuTheme = 'dark' | 'light';

export interface UserMenuListProps extends UserMenuProps {
  displayTheme?: UserMenuTheme;
}

export interface BurgerMenuProps extends UserMenuProps {
  isLoggedIn: boolean;
}
