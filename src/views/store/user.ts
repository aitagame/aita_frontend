import { makeAutoObservable } from 'mobx';
import { MethodHookValues } from 'views/types/auth';
import { Profile, User } from 'views/types/user';
import AitaService from 'views/service/index.service';
import { ListResponse } from 'views/types/responses';

export class UserData {
  user: User = {
    id: 0,
    clan_id: null,
    email: null,
    firstName: '',
    lastName: null,
    created_at: '',
    updated_at: '',
    deleted_at: '',
  };
  profile: Profile = {
    id: '',
    name: '',
    class: undefined,
    rating: 0,
    is_my: false,
  };

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  *getAuthData(data: MethodHookValues, identifier: string) {
    const userData: User = yield AitaService.post(`users/authorization/near`, {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      accessKey: (data as any)[identifier], //TODO: fix MethodHookValues type
      accountId: data.accountId,
    });
    this.user = userData;

    const userProfiles: ListResponse<Profile> = yield AitaService.get(
      `profiles?user_id=${this.user.id}`
    );
    const userProfile = userProfiles.data[0];
    if (userProfile && userProfile.is_my) {
      this.profile = userProfile;
    }
  }

  *createProfile(name: string, elementClass: string, callback: () => void) {
    const newProfile: Profile = yield AitaService.post(`profiles`, { name, class: elementClass });
    this.profile = newProfile;
    callback();
  }
}

export const userStore = new UserData();
