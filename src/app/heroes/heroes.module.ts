import { NgModule } from "@angular/core";
import { ListadoComponent } from './listado/listado.component';
import { HeroeComponent } from './heroe/heroe.component';
import { CommonModule } from "@angular/common";

@NgModule({
    //Aqui se incluyen los componentes,pipes o cosas relacionadas entre si o que estén dentro de la carpeta del modulo, esto solo se encuentra dentro del modulo
    declarations:[
        ListadoComponent,
        HeroeComponent
    ],
    //Esto dice que es lo que queremos que se use o que se vea fuera del modulo
    exports:[
        ListadoComponent
    ],
    //Aqui se importan unicamente modulos, especificamente modulos que queremos usar en este modulo para utilizar, aunque solo nos daría acceso a lo que se indique
    //en el apartado de exports en el modulo importado.
    imports:[
        CommonModule
    ]
})

export class HeroesModule{}