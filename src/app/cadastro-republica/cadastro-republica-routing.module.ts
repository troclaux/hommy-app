import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroRepublicaPage } from './cadastro-republica.page';

import { BrMaskerModule } from "br-mask";

const routes: Routes = [
  {
    path: '',
    component: CadastroRepublicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), BrMaskerModule],
  exports: [RouterModule],
})
export class CadastroRepublicaPageRoutingModule {}
