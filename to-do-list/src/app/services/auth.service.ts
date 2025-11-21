import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isSignedUp = signal(true);
  isLoggedIn= signal(false);


}
