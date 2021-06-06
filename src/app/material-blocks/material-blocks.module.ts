import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'; 
import {MatDividerModule} from '@angular/material/divider'; 
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';  


@NgModule({
  declarations: [],
  imports: [
     MatToolbarModule,
     MatButtonModule,
     MatCardModule,
     MatDividerModule,
     MatTableModule,
     MatIconModule,
     MatTabsModule,
     MatGridListModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatIconModule,
    MatTabsModule,
    MatGridListModule
  ]
})
export class MaterialBlocksModule { }
