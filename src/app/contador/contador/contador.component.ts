import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h2>Hola Mundo</h2>
        <!-- Asi muestras una propiedad de la clase del componente -->
        <!-- Y no solo eso, también puedes poner código Javascript -->
        <h3>{{title}}</h3> 
        <h3>La base de incremento o decremento es <strong>{{ base }}</strong></h3>
        <hr>
        <button (click)="acumular(base)"> + {{base}} </button>
        <!-- El undefined se muestra cómo un string vacio -->
        <!-- ANGULAR por si solo identifica que cambió en el código y vuelve a  -->
        <!-- redibujar lo que se necesita -->
        <span> valor actual del numero: {{ numero }} </span>
        
        <button (click)="acumular(-base)"> {{-base}} </button>
        <!-- <app-heroe></app-heroe> -->
    `,
})


export class ContadorComponent{
    title:string = 'Contador app';
    visitas:number = 1;
    numero:number = 20;
    base:number = 10;
    acumular(valor:number):void{
        this.numero = this.numero + valor;
    }
}