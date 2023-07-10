import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Veiculo } from 'src/app/models/veiculo.model';
import { ModalMensagemService } from 'src/app/services/modal-mensagem/modal-mensagem.service';
import { VeiculoService } from 'src/app/services/veiculo/veiculo.service';

@Component({
  selector: 'app-veiculo-edit',
  templateUrl: './veiculo-edit.component.html',
  styleUrls: ['./veiculo-edit.component.css']
})
export class VeiculoEditComponent {

  veiculo: Veiculo;
  foiAtualizado!: boolean;

  constructor(private router: Router, private veiculoService: VeiculoService,
    private activatedRoute: ActivatedRoute, private modalMensagemService: ModalMensagemService) {
    this.veiculo = new Veiculo();
    this.getById(this.getId());
  }

  edit() {
    this.veiculoService.edit(this.veiculo)
      .pipe(take(1))
      .subscribe({
        next: () => this.handleResponseVeiculoPut(),
        error: erro => this.handleResponseError(erro.status)
      });
  }

  back(): void {
    this.router.navigate(['veiculo/veiculo-index']);
  }

  getId(): number {
    return Number(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  getById(id: number): void {
    this.veiculoService.getById(id)
      .pipe(take(1))
      .subscribe({
        next: veiculo => this.handleResponseVeiculoGet(veiculo),
        error: erro => this.handleResponseError(erro.status)
      });
  }

  handleResponseVeiculoGet(veiculo: Veiculo): void {
    veiculo.DataFabricacao = veiculo.DataFabricacao.split('T')[0];
    this.veiculo = veiculo;
  }

  handleResponseVeiculoPut(): void {
    this.exibirMsgSucesso();
    this.foiAtualizado = true;
  }

  handleResponseError(erro: number): void {
    this.exibirMsgErro(erro);
  }

  exibirMsgErro(erro: number): void {
    let mensagemErro: string = '';

    if (erro === 400)
      mensagemErro = 'Informações de cadastro estão incorretas e/ou incompletas.';
    else if (erro === 404)
      mensagemErro = 'Veículo não está mais disponível para ser editado.';
    else
      mensagemErro = 'Ocorreu um erro! Entre em contato com suporte.';

    this.modalMensagemService.ativarModalMsg(mensagemErro);
  }

  desejaEditar(id: number): void {
    if (confirm(`Tem certeza que deseja realmente atualizar o veículo de id  ${id}?`))
      this.edit();
  }

  exibirMsgSucesso(): void {
    let mensagemSucesso = 'O veículo foi atualizado com sucesso.';
    this.modalMensagemService.ativarModalMsg(mensagemSucesso);
  }

}
