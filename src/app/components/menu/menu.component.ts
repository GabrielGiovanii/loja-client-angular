import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/login/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private router: Router, private authService: AuthService) {
  }

  Deslogar(): void {
    this.authService.setIsAuthenticated(false);
    this.authService.removeAuthToken();
    this.router.navigate(['login']);
    console.log(this.authService.getIsAuthenticated());
    console.log(this.authService.tokenKey.length);
  }

}
