import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalMensagemService {
  exibirModalMsg: boolean;
  mensagem: string;

  constructor() {
    this.exibirModalMsg = false;
    this.mensagem = '';
  }

  getMsg(): string {
    return this.mensagem;
  }

  getExibirModalMsg(): boolean {
    return this.exibirModalMsg;
  }

  ativarModalMsg(mensagem: string): void {
    this.exibirModalMsg = true;
    this.mensagem = mensagem;
  }

  desativarModalMsg(): void {
    this.exibirModalMsg = false;
    this.mensagem = '';
  }

}
