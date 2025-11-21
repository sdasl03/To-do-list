import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  
  userLoggedIn(): boolean {
    // Placeholder logic for user authentication status
    return !!localStorage.getItem('userToken');
  }
}
