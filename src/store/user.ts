import { makeAutoObservable } from 'mobx';
import { User } from '../models/user';
import { Artist } from '../models/artist';
import { makePersistable } from 'mobx-persist-store';

export class UserStore {
  data = {} as User | null;
  topArtits = [] as Artist[] | null;

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'UserStore',
      properties: ['data', 'topArtits'],
      storage: window.localStorage,
    });
  }

  setUserData(data: User | null) {
    this.data = data;
  }

  getUserData() {
    return this.data;
  }

  setTopArtits(artists: Artist[]) {
    this.topArtits = artists;
  }

  getTopArtits() {
    return this.topArtits;
  }
}

export const userStore = new UserStore();
