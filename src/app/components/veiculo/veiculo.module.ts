import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiculoCreateComponent } from './veiculo-create/veiculo-create.component';
import { VeiculoEditComponent } from './veiculo-edit/veiculo-edit.component';
import { VeiculoIndexComponent } from './veiculo-index/veiculo-index.component';
import { VeiculoRoutingModule } from './veiculo-routing.module';
import { FormsModule } from '@angular/forms';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    VeiculoCreateComponent,
    VeiculoEditComponent,
    VeiculoIndexComponent
  ],
  imports: [
    CommonModule,
    VeiculoRoutingModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-br' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ]
})
export class VeiculoModule { }
