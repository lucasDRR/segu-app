import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialBlocksModule } from '../material-blocks/material-blocks.module';

import { AseguradoRoutingModule } from './asegurado-routing.module';
import { AseguradoComponent } from './asegurado.component';
import { AseguradoInfoComponent } from './asegurado-info/asegurado-info.component';
import { AsegDataComponent } from './asegurado-info/aseg-data/aseg-data.component';
import { AsegPolComponent } from './asegurado-info/aseg-pol/aseg-pol.component';
import { PolizaComponent } from './poliza/poliza.component';
import { PolizaDetailsComponent } from './poliza/poliza-details/poliza-details.component';
import { PolizaBenefComponent } from './poliza/poliza-benef/poliza-benef.component';
import { FakeLoginComponent } from './fake-login/fake-login.component';


@NgModule({
  declarations: [
    AseguradoComponent,
    AseguradoInfoComponent,
    AsegDataComponent,
    AsegPolComponent,
    PolizaComponent,
    PolizaDetailsComponent,
    PolizaBenefComponent,
    FakeLoginComponent
  ],
  imports: [
    CommonModule,
    AseguradoRoutingModule,
    MaterialBlocksModule
  ]
})
export class AseguradoModule { }
