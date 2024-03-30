import { makeAutoObservable } from 'mobx';

export class ApplicationStore {
  currentPage = '/home';

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentPage(newPage: string) {
    this.currentPage = newPage;
  }
}

export const applicationStore = new ApplicationStore();
