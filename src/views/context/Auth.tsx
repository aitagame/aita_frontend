import { createContext } from 'react';
import { AuthMethod, MethodHookValues } from 'views/types/auth';
import { Profile, User } from 'views/types/user';

export interface AuthContextValues {
  isLoggedIn: boolean;
  authMethod: AuthMethod | null;
  setAuthMethod: (method: AuthMethod) => void;
  walletId: string | null;
  values?: MethodHookValues | null;
  setValues?: (data: MethodHookValues) => void;
  profile: Profile;
  user: User;
}

const AuthContextData: AuthContextValues = {
  isLoggedIn: false,
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
    id: '',
  },
};

export const AuthContext = createContext(AuthContextData);
