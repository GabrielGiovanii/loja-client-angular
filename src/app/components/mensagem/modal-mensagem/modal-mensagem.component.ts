import { Component } from '@angular/core';
import { ModalMensagemService } from 'src/app/services/modal-mensagem/modal-mensagem.service';

@Component({
  selector: 'app-modal-mensagem',
  templateUrl: './modal-mensagem.component.html',
  styleUrls: ['./modal-mensagem.component.css']
})
export class ModalMensagemComponent {
  exibirModalMsg: boolean;
  mensagem: string;

  constructor(private modalMensagemService: ModalMensagemService) {
    this.mensagem = this.modalMensagemService.getMsg();
    this.exibirModalMsg = this.modalMensagemService.getExibirModalMsg();
  }

  ocultarModalMsg(): void {
    this.modalMensagemService.desativarModalMsg();
  }
}
