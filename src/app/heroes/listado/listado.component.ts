import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{

  heroes: string[] = ['Spiderman','IronMan','Hulk','Thor','SuperMan','Shazam','Flash'];
  restador: number = 1;
  heroeBorrado: string= '';
  unHeroeFueBorrado ():boolean {
      if(this.heroeBorrado == '')
        return false;
      else
        return true;
      
  }
  borrarHeroe(restador: number) : void{

    let indiceFinal: number = this.heroes.length - this.restador;
    this.heroes[indiceFinal] = '';
    this.restador += restador;
    console.log(indiceFinal);
    console.log(this.heroes);
  }
  borrarHeroe1(): void {
    let heroeBorrado: string = this.heroes.pop() || '';
    this.heroeBorrado = heroeBorrado;
    console.log('El valor eliminado del arreglo es:'+ heroeBorrado );
    console.log(this.heroes);
  }
}
