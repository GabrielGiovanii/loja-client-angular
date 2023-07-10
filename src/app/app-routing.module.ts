import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MensagemErro404Component } from './components/mensagem/mensagem-erro404/mensagem-erro404.component';
import { LoginComponent } from './components/login/login.component';
import { UserGuard } from './guards/login/user.guard';
import { AcessoNegadoComponent } from './components/mensagem/acesso-negado/acesso-negado.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [UserGuard] },
  { path: 'veiculo', loadChildren: () => import('./components/veiculo/veiculo.module').then(v => v.VeiculoModule), canActivate: [UserGuard] },
  { path: 'acesso-negado', component: AcessoNegadoComponent },
  { path: '**', component: MensagemErro404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
