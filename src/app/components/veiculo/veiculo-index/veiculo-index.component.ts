import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Veiculo } from 'src/app/models/veiculo.model';
import { ModalMensagemService } from 'src/app/services/modal-mensagem/modal-mensagem.service';
import { VeiculoService } from 'src/app/services/veiculo/veiculo.service';

@Component({
  selector: 'app-veiculo-index',
  templateUrl: './veiculo-index.component.html',
  styleUrls: ['./veiculo-index.component.css']
})
export class VeiculoIndexComponent {

  codigoPesquisa: string;
  veiculos: Veiculo[];

  constructor(private router: Router, private veiculoService: VeiculoService,
    private modalMensagemService: ModalMensagemService) {
    this.codigoPesquisa = '';
    this.veiculos = new Array<Veiculo>();
  }

  get(): void {
    this.veiculos = [];
    if (this.codigoPesquisa == '')
      this.getAll();
    else
      this.getById(Number(this.codigoPesquisa));
  }

  getAll(): void {
    this.veiculoService.get()
      .pipe(take(1))
      .subscribe({
        next: veiculos => this.handleResponseVeiculos(veiculos),
        error: erro => this.handleResponseError(erro.status)
      });
  }

  getById(id: number): void {
    this.veiculoService.getById(id)
      .pipe(take(1))
      .subscribe({
        next: veiculo => this.handleResponseVeiculo(veiculo),
        error: erro => this.handleResponseError(erro.status)
      });
  }

  handleResponseVeiculos(veiculos: Veiculo[]): void {
    this.veiculos = veiculos;
  }

  handleResponseVeiculo(veiculo: Veiculo): void {
    this.veiculos.push(veiculo);
  }

  handleResponseError(erro: number): void {
    this.exibirMsgErro(erro);
  }

  exibirMsgErro(erro: number): void {
    let mensagemErro: string = '';

    if (erro === 400)
      mensagemErro = 'O Id da pesquisa é inválido.';
    else if (erro === 404) {
      mensagemErro = 'Veículo não foi encontrado.';
      this.codigoPesquisa = '';
      this.get();
    }
    else
      mensagemErro = 'Ocorreu um erro! Entre em contato com suporte.';

    this.modalMensagemService.ativarModalMsg(mensagemErro);

  }

  desejaExcluir(id: number): void {
    if (confirm(`Tem certeza que deseja excluir o veículo de id  ${id}?`))
      this.delete(id);
  }

  delete(id: number): void {
    this.veiculoService.delete(id)
      .pipe(take(1))
      .subscribe({
        next: () => this.get(),
        error: erro => this.handleResponseError(erro.status)
      });
  }

  /*convertToDatePtBr(data: string): string {
    let dataFormatada = new Date(data.split('T')[0]);
    return dataFormatada.toLocaleDateString('pt-br');
  }*/

  create(): void {
    this.router.navigate(['veiculo/veiculo-create']);
  }

  edit(id: number): void {
    this.router.navigate(['veiculo/veiculo-edit', id]);
  }

}