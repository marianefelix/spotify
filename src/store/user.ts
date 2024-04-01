import { makeAutoObservable } from 'mobx';
import { User } from '../models/user';
import { Artist } from '../models/artist';
import { makePersistable } from 'mobx-persist-store';
import { ArtistAlbum } from '../models/artistAlbum';

export class UserStore {
  data = {} as User | null;
  topArtits = [] as Artist[];
  allArtits = [] as Artist[];
  artistAlbums = [] as ArtistAlbum[];

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'UserStore',
      properties: ['data', 'topArtits', 'allArtits'],
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

  setAllArtists(artists: Artist[]) {
    this.allArtits = artists;
  }

  getAllArtists() {
    return this.allArtits;
  }

  setArtistAlbums(artistAlbums: ArtistAlbum[]) {
    this.artistAlbums = artistAlbums;
  }

  getArtistAlbums() {
    return this.artistAlbums;
  }
}

export const userStore = new UserStore();
