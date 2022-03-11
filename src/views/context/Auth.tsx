import { createContext } from 'react';
import { AuthMethod, MethodHookValues } from 'views/types/auth';
import { Profile, User } from 'views/types/user';

export interface AuthContextValues {
  isLoggedIn: boolean;
  authMethod?: AuthMethod;
  setAuthMethod: (method: AuthMethod) => void;
  walletId: string | null;
  values?: MethodHookValues;
  setValues?: (data: MethodHookValues) => void;
  profile: Profile;
  user: User;
}

const AuthContextData: AuthContextValues = {
  isLoggedIn: false,
  walletId: null,
  authMethod: undefined,
  values: { accountId: undefined },
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
