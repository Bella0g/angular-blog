import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveLocalService {

  constructor() { }

  public saveFormData(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public getFormData(key: string) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
}
