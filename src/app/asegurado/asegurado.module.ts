import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AseguradoRoutingModule } from './asegurado-routing.module';
import { AseguradoComponent } from './asegurado.component';
import { AseguradoInfoComponent } from './asegurado-info/asegurado-info.component';


@NgModule({
  declarations: [
    AseguradoComponent,
    AseguradoInfoComponent
  ],
  imports: [
    CommonModule,
    AseguradoRoutingModule
  ]
})
export class AseguradoModule { }
