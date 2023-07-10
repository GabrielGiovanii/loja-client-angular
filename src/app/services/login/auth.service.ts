import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: boolean;
  tokenKey: string;

  constructor() {
    this.tokenKey = 'authToken';
    this.isAuthenticated = false;
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
