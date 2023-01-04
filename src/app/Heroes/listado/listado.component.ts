import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['A', 'B', 'C', 'D'];
  heroeBorrado: string = '';

  borrarUltimoHeroe(){
    const heroeBorrado = this.heroes.pop();
    this.heroeBorrado = heroeBorrado ? heroeBorrado : '';
  }

}
