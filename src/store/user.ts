import { makeAutoObservable } from 'mobx';
import { User } from '../models/user';

export class UserStore {
  data = {} as User | null;

  constructor() {
    makeAutoObservable(this);
  }

  setUserData(data: User | null) {
    this.data = data;
  }

  getUserData() {
    return this.data;
  }
}

export const userStore = new UserStore();
