import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AseguradoInfoComponent } from './asegurado-info/asegurado-info.component';
import { AseguradoComponent } from './asegurado.component';
import { PolizaComponent } from './poliza/poliza.component';

const routes: Routes = [
  { path: '', component: AseguradoComponent, 
    children: [
        { path: '', component: AseguradoInfoComponent },
    //  { path: '/:id', component: AseguradoDetailsComponent },
    //  { path: '/:id/update', component: AseguradoUpdateComponent }
    //  { path: '/:id/delete', component: AseguradoDeleteComponent }
        { path: 'poliza', 
          children: [
            {path: ':id' , component: PolizaComponent}
            //{path: update, component: PolizaUpdate }
            //{path: delete, component: PolizaDelete }

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
