import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefrigerantePageRoutingModule } from './refrigerante-routing.module';

import { RefrigerantePage } from './refrigerante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefrigerantePageRoutingModule
  ],
  declarations: [RefrigerantePage]
})
export class RefrigerantePageModule {}
