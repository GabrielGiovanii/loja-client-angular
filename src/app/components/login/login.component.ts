import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/login/auth.service';
import { ModalMensagemService } from 'src/app/services/modal-mensagem/modal-mensagem.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario: string;
  senha: string;

  constructor(private router: Router, private authService: AuthService,
    private modalMensagemService: ModalMensagemService) {
    this.usuario = '';
    this.senha = '';
  }

  logar(): void {
    let token = '';
    if (this.usuario === 'a' && this.senha === 'b') {
      this.authService.setIsAuthenticated(true);
      token = `${this.usuario}${this.senha}`;
      this.authService.setAuthToken(token);
      this.router.navigate(['home']);
      this.exibirMsgSucesso();
    }
    else
      this.exibirMsgErro();
  }

  exibirMsgErro(): void {
    this.modalMensagemService.ativarModalMsg(this.getMsgErroAdequada());
  }

  getMsgErroAdequada(): string {
    let mensageErro: string = '';

    if (this.usuario === '' && this.senha === '')
      mensageErro = 'Usuário e senha são obrigatórios!';
    else if (this.usuario === '')
      mensageErro = 'Usuário é obrigatório!';
    else if (this.senha === '')
      mensageErro = 'Senha é obrigatório!';
    else {
      mensageErro = 'Usuário e/ou senha Inválidos';
    }

    return mensageErro;
  }

  exibirMsgSucesso(): void {
    let mensageErro: string = `${this.usuario}, seu login executado com sucesso!`;
    this.modalMensagemService.ativarModalMsg(mensageErro);
  }

}
