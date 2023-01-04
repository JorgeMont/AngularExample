import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h2>{{title}}</h2>
    <h3>La base es: {{base}}</h3>
    <button (click)="sumar()"> + {{base}}</button>
    <span> {{numero}} </span>
    <button (click)="restar()"> - {{base}}</button> 
  `
})
export class Contador{
    title: string = 'Contador App';
    numero: number = 0;
    base: number = 5;

    sumar(){ //un metodo
        this.numero += this.base;
    }

    restar(){
        this.numero -= this.base;
    }
}

