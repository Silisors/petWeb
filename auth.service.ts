import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;

  constructor() { }

  login(email: string, password: string): boolean {
    // Código para validar la información de inicio de sesión
    if (email === '1' && password === '1') {
      this.isLoggedIn = true; // Establece el estado de autenticación a true
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
