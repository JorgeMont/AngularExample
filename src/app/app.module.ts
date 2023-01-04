import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Contador } from './Contador/contador.component';
import { HeroeComponent } from './Heroes/Heroe/heroe.component';
import { ListadoComponent } from './Heroes/listado/listado.component';


@NgModule({
  declarations: [
    AppComponent,
    Contador,
    HeroeComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
