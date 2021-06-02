import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AseguradoInfoComponent } from './asegurado-info/asegurado-info.component';
import { AseguradoComponent } from './asegurado.component';

const routes: Routes = [
  { path: '', component: AseguradoComponent, 
    children: [
      {path: '', component: AseguradoInfoComponent },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AseguradoRoutingModule { }
