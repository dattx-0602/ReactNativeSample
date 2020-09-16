import { action, computed, observable } from 'mobx';

class UserStore {
  @observable _hasLogin: boolean = false;

  @action setHasLogin = (hasLogin: boolean) => {
    this._hasLogin = hasLogin;
  };

  @computed get IsUserLogined(): boolean {
    return this._hasLogin;
  }
}

const userStore = new UserStore();
export default userStore;
