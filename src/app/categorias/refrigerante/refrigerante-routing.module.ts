import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefrigerantePage } from './refrigerante.page';

const routes: Routes = [
  {
    path: '',
    component: RefrigerantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefrigerantePageRoutingModule {}
