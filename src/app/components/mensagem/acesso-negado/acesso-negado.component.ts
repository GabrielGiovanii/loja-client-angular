import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acesso-negado',
  templateUrl: './acesso-negado.component.html',
  styleUrls: ['./acesso-negado.component.css']
})
export class AcessoNegadoComponent {

  constructor(private router: Router) {

  }

  goLogin(): void {
    this.router.navigate(['login']);
  }
}
