import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


//Modulos
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    //Aqui importamos el modulo Heroes con el cual podemos usar todos los elementos relacionados de Heroes
    HeroesModule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
