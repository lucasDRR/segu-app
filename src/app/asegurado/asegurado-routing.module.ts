import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AseguradoInfoComponent } from './asegurado-info/asegurado-info.component';
import { AseguradoComponent } from './asegurado.component';
import { FakeLoginComponent } from './fake-login/fake-login.component';
import { PolizaComponent } from './poliza/poliza.component';

const routes: Routes = [
  {
    path: '', component: AseguradoComponent,
    children: [
      { path: '', component: FakeLoginComponent },
      { path: ':id', component: AseguradoInfoComponent },
      {
        path: 'poliza',
        children: [
          { path: ':id', component: PolizaComponent }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AseguradoRoutingModule { }
