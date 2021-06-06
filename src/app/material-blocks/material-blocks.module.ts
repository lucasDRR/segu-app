import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'; 
import {MatDividerModule} from '@angular/material/divider'; 
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';  
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [],
  imports: [
     ReactiveFormsModule,
     MatToolbarModule,
     MatButtonModule,
     MatCardModule,
     MatDividerModule,
     MatTableModule,
     MatIconModule,
     MatTabsModule,
     MatGridListModule,
     MatFormFieldModule,
     MatInputModule
  ],
  exports: [
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatIconModule,
    MatTabsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MaterialBlocksModule { }
