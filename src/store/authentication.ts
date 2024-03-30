import { makeAutoObservable } from 'mobx';
import Cookies from 'js-cookie';
import { makePersistable } from 'mobx-persist-store';

export class AuthenticationStore {
  authenticated = false;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'AuthStore',
      properties: ['authenticated'],
      storage: window.localStorage,
    });
  }

  setToken(token: string) {
    Cookies.set('access_token', token, { secure: true });
  }

  getToken() {
    return Cookies.get('access_token');
  }

  clearToken() {
    Cookies.remove('access_token');
  }

  setAuthenticated(value: boolean) {
    this.authenticated = value;
  }

  getAuthenticated() {
    return this.authenticated;
  }

  setIsLoading(value: boolean) {
    this.isLoading = value;
  }

  getIsLoading() {
    return this.isLoading;
  }

  clearIsLoading() {}
}

export const authStore = new AuthenticationStore();
