import { makeAutoObservable } from 'mobx'
import { supabase } from 'supabase'
import { RootStore } from 'stores/RootStore'
import type { Profile } from 'types/profile'
import type { User } from 'types/user'

export class ProfileStore {
  constructor(rootStore: RootStore) {
    makeAutoObservable(this)
  }

  protected _state: Profile | null = null
  protected set state(state) {
    this._state = state
  }

  protected signProfile(profile: Profile): Profile {
    this.state = profile
    return this.state
  }

  public get state() {
    return this._state
  }

  public async fetchProfile(user: User) {
    return new Promise(async (resolve, reject) => {
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()

      if (error) {
        return reject(error)
      }

      if (profile) {
        resolve(this.signProfile(profile))
      }
    })
  }

  public getUsername(variant: 'primary' | 'compact' = 'primary') {
    if (this.state === null) return null
    const { firstName, lastName } = this.state

    switch (variant) {
      case 'compact': return `${firstName} ${lastName[0]}.`
      default: return `${firstName} ${lastName}`
    }
  }
}
