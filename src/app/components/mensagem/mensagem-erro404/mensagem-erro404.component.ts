import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/login/auth.service';

@Component({
  selector: 'app-mensagem-erro404',
  templateUrl: './mensagem-erro404.component.html',
  styleUrls: ['./mensagem-erro404.component.css']
})
export class MensagemErro404Component {
  constructor(private router: Router, private authService: AuthService) {
  }

  goHome(): void {
    this.router.navigate(['home']);
  }
}
