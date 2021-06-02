import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'; 
import {MatDividerModule} from '@angular/material/divider'; 


@NgModule({
  declarations: [],
  imports: [
     MatToolbarModule,
     MatButtonModule,
     MatCardModule,
     MatDividerModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class MaterialBlocksModule { }
