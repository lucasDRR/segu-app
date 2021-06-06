import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeguHomeComponent } from './segu-home/segu-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialBlocksModule } from './material-blocks/material-blocks.module';


@NgModule({
  declarations: [
    AppComponent,
    SeguHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialBlocksModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
