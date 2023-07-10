import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { MensagemErro404Component } from './components/mensagem/mensagem-erro404/mensagem-erro404.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { UserGuard } from './guards/login/user.guard';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AcessoNegadoComponent } from './components/mensagem/acesso-negado/acesso-negado.component';
import { ModalMensagemComponent } from './components/mensagem/modal-mensagem/modal-mensagem.component';
import { MasterPageComponent } from './components/master-page/master-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    MensagemErro404Component,
    LoginComponent,
    AcessoNegadoComponent,
    ModalMensagemComponent,
    MasterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [UserGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}