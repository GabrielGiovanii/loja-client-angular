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

  constructor(private modalMensagemService: ModalMensagemService) {
  }

  exibirModalMsg(): boolean {
    return this.modalMensagemService.getExibirModalMsg();
  }
}

