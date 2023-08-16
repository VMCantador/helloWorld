import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SucoPageRoutingModule } from './suco-routing.module';

import { SucoPage } from './suco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SucoPageRoutingModule
  ],
  declarations: [SucoPage]
})
export class SucoPageModule {}
