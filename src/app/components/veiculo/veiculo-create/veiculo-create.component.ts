import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Veiculo } from 'src/app/models/veiculo.model';
import { ModalMensagemService } from 'src/app/services/modal-mensagem/modal-mensagem.service';
import { VeiculoService } from 'src/app/services/veiculo/veiculo.service';

@Component({
  selector: 'app-veiculo-create',
  templateUrl: './veiculo-create.component.html',
  styleUrls: ['./veiculo-create.component.css']
})
export class VeiculoCreateComponent {

  veiculo: Veiculo;

  constructor(private router: Router, private veiculoService: VeiculoService,
    private modalMensagemService: ModalMensagemService) {
    this.veiculo = new Veiculo();
  }

  back() {
    this.router.navigate(['veiculo/veiculo-index']);
  }

  create() {
    this.veiculoService.create(this.veiculo)
      .pipe(take(1))
      .subscribe({
        next: () => this.exibirMsgSucesso(),
        error: erro => this.handleResponseError(erro.status)
      });
  }

  handleResponseVeiculo(veiculo: Veiculo): void {
    this.veiculo = veiculo;
  }

  handleResponseError(erro: number): void {
    this.exibirMsgErro(erro);
  }

  exibirMsgErro(erro: number): void {
    let mensageErro: string = '';

    if (erro === 400)
      mensageErro = 'Informações de cadastro estão incorretas e/ou incompletas.';
    else
      mensageErro = 'Ocorreu um erro! Entre em contato com suporte.';

    this.modalMensagemService.ativarModalMsg(mensageErro);
  }

  exibirMsgSucesso(): void {
    let mensagemSucesso = 'O veículo foi criado com sucesso.';
    this.modalMensagemService.ativarModalMsg(mensagemSucesso);
  }
}
