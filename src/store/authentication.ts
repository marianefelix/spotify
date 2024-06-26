import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

interface AuthenticationStoreI {
  token: string;
  isLoading: boolean;
}

export class AuthenticationStore implements AuthenticationStoreI {
  token = '';
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'AuthStore',
      properties: ['token'],
      storage: window.localStorage,
    });
  }

  setToken(token: string) {
    this.token = token;
  }

  private getAuthStore() {
    const authStore = localStorage.getItem('AuthStore');
    if (authStore) {
      const authStoreParsed = Object.assign(this, JSON.parse(authStore)) as AuthenticationStoreI;

      return authStoreParsed;
    }

    return null;
  }

  getToken() {
    const authStore = this.getAuthStore();

    if (authStore !== null) {
      return authStore.token;
    }

    return null;
  }

  clearAll() {
    localStorage.removeItem('AuthStore');
  }

  getAuthenticated() {
    if (this.getToken() !== null && this.getToken() !== '') {
      return true;
    }

    return false;
  }

  setIsLoading(value: boolean) {
    this.isLoading = value;
  }

  getIsLoading() {
    return this.isLoading;
  }
}

export const authStore = new AuthenticationStore();
