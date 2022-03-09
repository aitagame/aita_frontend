import { createContext } from 'react';
import { AuthMethod, MethodHookValues } from 'views/types/auth';
import { Profile, User } from 'views/types/user';

export interface AuthContextValues {
  isLoggedIn: boolean | null;
  authMethod: AuthMethod | null;
  setAuthMethod: (method: AuthMethod) => void;
  walletId: string | null;
  values?: MethodHookValues | null;
  setValues?: (data: MethodHookValues) => void;
  profile: Profile;
  user: User;
}

const AuthContextData: AuthContextValues = {
  isLoggedIn: null,
  walletId: null,
  authMethod: null,
  values: null,
  setValues: () => null,
  setAuthMethod: () => null,
  profile: {
    id: '',
    name: '',
    class: '',
    rating: 0,
    is_my: false,
  },
  user: {
    id: 0,
    clan_id: null,
    email: null,
    firstName: '',
    lastName: null,
    created_at: '',
    updated_at: '',
    deleted_at: '',
  },
};

export const AuthContext = createContext(AuthContextData);
