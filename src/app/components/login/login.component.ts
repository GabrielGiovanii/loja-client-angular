import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthService } from 'src/app/services/login/auth.service';
import { ModalMensagemService } from 'src/app/services/modal-mensagem/modal-mensagem.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario: Usuario;

  constructor(private authService: AuthService, private modalMensagemService: ModalMensagemService) {
    this.usuario = new Usuario();
  }

  logar(): void {
    let token = '';
    if (this.authService.authenticate(this.usuario))
      this.exibirMsgSucesso();
    else
      this.exibirMsgErro();
  }

  exibirMsgErro(): void {
    this.modalMensagemService.ativarModalMsg(this.getMsgErroAdequada());
  }

  getMsgErroAdequada(): string {
    let mensageErro: string = '';

    if (this.usuario.login === '' && this.usuario.senha === '')
      mensageErro = 'Usuário e senha são obrigatórios!';
    else if (this.usuario.login === '')
      mensageErro = 'Usuário é obrigatório!';
    else if (this.usuario.senha === '')
      mensageErro = 'Senha é obrigatório!';
    else {
      mensageErro = 'Usuário e/ou senha Inválidos';
    }

    return mensageErro;
  }

  exibirMsgSucesso(): void {
    let mensageErro: string = `${this.usuario.login}, seu login  foi executado com sucesso!`;
    this.modalMensagemService.ativarModalMsg(mensageErro);
  }
}
