import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveLocalService {

  constructor() { }
 // Method to save data to local storage
  public saveFormData(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Method to retrieve data from local storage
  public getFormData(key: string) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
}
