import { makeAutoObservable } from 'mobx'
import { ProfileStore } from 'stores/ProfileStore'

export class RootStore {
  public profileStore: ProfileStore;

  constructor() {
    makeAutoObservable(this, undefined, {
      deep: true
    })

    this.profileStore = new ProfileStore(this)
  }
}
