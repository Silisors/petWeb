import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  invalidEmail: boolean = false;

  constructor(private router: Router, private authService: AuthService) { } // Inyecta el servicio AuthService

  onLogin() {
    if (this.authService.login(this.email, this.password)) {
      this.router.navigate(['home']);
    }
  }

  validateEmail() {
    const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    this.invalidEmail = !emailRegex.test(this.email);
  }
}
