import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: boolean;
  tokenKey: string;

  constructor(private router: Router) {
    this.tokenKey = 'authToken';
    (this.getAuthToken() !== '') ? this.isAuthenticated = true : this.isAuthenticated = false;
  }

  authenticate(usuario: Usuario): boolean {
    let token = '';
    if (usuario.login === 'gabriel' && usuario.senha === '123') {
      this.setIsAuthenticated(true);
      token = `${usuario.login}${usuario.senha}`;
      this.setAuthToken(token);
      this.router.navigate(['home']);
    }
    return this.isAuthenticated;
  }

  setIsAuthenticated(value: boolean): void {
    this.isAuthenticated = value;
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  setAuthToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  getAuthToken(): string {
    let token = localStorage.getItem(this.tokenKey);
    return token !== null ? token : '';
  }

  removeAuthToken() {
    localStorage.removeItem(this.tokenKey);
  }
}
