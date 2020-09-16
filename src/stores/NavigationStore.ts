import { action, computed, observable } from 'mobx';

class NavigationStore {
  @observable _lockNavigation: boolean = false;

  @action setLockNavigation = (hasLock: boolean) => {
    this._lockNavigation = hasLock;
  };

  @computed get IsLockNavigation(): boolean {
    return this._lockNavigation;
  }
}

const navigationStore = new NavigationStore();
export default navigationStore;
