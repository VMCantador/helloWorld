import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SucoPage } from './suco.page';

const routes: Routes = [
  {
    path: '',
    component: SucoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SucoPageRoutingModule {}
