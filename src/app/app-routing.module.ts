import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeguHomeComponent } from './segu-home/segu-home.component';

const routes: Routes = [
  {path: '', component: SeguHomeComponent},
  { path: 'asegurado', 
    loadChildren: () => import('./asegurado/asegurado.module').then(m => m.AseguradoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
