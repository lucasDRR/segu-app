import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialBlocksModule } from '../material-blocks/material-blocks.module';

import { AseguradoRoutingModule } from './asegurado-routing.module';
import { AseguradoComponent } from './asegurado.component';
import { AseguradoInfoComponent } from './asegurado-info/asegurado-info.component';
import { AsegDataComponent } from './asegurado-info/aseg-data/aseg-data.component';
import { AsegPolComponent } from './asegurado-info/aseg-pol/aseg-pol.component';


@NgModule({
  declarations: [
    AseguradoComponent,
    AseguradoInfoComponent,
    AsegDataComponent,
    AsegPolComponent
  ],
  imports: [
    CommonModule,
    AseguradoRoutingModule,
    MaterialBlocksModule
  ]
})
export class AseguradoModule { }
