import { Component } from '@angular/core';
import { AuthService } from './services/login/auth.service';
import { ModalMensagemService } from './services/modal-mensagem/modal-mensagem.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Loja-Angular';

  isAuthenticated: boolean;

  constructor(private authService: AuthService, private modalMensagemService: ModalMensagemService,
    private router: Router) {
    this.isAuthenticated = false;

    let authToken = this.authService.getAuthToken();

    if (authToken)
      this.authService.setIsAuthenticated(true);
    else
      this.router.navigate(['acesso-negado']);
  }
  exibirMenu(): boolean {
    return this.authService.getIsAuthenticated();
  }

  exibirModalMsg(): boolean {
    return this.modalMensagemService.getExibirModalMsg();
  }
}

