import { Component, computed } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  signMode = computed(() => {
    return (this.auth.isSignedUp())?'Sign Up':'Log In';
  });
  oppositeSignMode = computed(() => {
    return (this.auth.isSignedUp())?'Log In':'Sign Up';
  });

  constructor(public auth: AuthService) { }

  onSwitchLoginState(): void {
    this.auth.isLoggedIn.set(!this.auth.isLoggedIn());
  }
  onSwitchSignupState(): void {
    this.auth.isSignedUp.set(!this.auth.isSignedUp());
  }

  onSubmit(form: NgForm){
    console.log(form.value);
    form.reset();
  }
}
