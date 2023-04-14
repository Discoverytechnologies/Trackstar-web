import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstoreService {

  constructor() { }

  public setData(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public getData(key: string) {

    return localStorage.getItem(key);
  }

  public removeData(key: string) {
    localStorage.removeItem(key);
  }
}