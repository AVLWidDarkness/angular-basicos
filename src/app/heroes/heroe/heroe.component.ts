import { Component } from '@angular/core';


@Component({
    selector:'app-heroe',
    templateUrl:'./heroe.component.html',
    
})
export class HeroeComponent{
    nombre: string = 'Iron Man';
    edad  : number = 45;
    get nombreCapitalizado():string{
        //this.nombre = 'Spiderman';
        return this.nombre.toUpperCase();
    }
    set cambiaredad(edad: number){
        this.edad = edad;
        console.log('Estás cambiando la edad con one way data binding');
        // return 10;
    }
    set cambiarNombre(nombre: string){
        this.nombre = nombre;
        // return 10;
    }
    obtenerNombre(): string {
        return `${ this.nombre } - ${ this.edad }`;
    }
}