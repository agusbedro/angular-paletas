import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Paletas } from './paletas-list/paletas';

@Injectable({
  providedIn: 'root'
})
export class PadelCartService {

  constructor() { }

  private _listaDeCompras: Paletas[] = [];
  listaDeCompras: BehaviorSubject<Paletas[]> = new BehaviorSubject(this._listaDeCompras);
  

  agregarAlCarrito(paleta: Paletas) {
    //find = es un metodo del array para buscar elementos
    let item: Paletas = this._listaDeCompras.find(v1 => v1.modelo == paleta.modelo);
    if(!item){
      this._listaDeCompras.push({...paleta});
    }
    else{
      item.cantidad += paleta.cantidad;
    }
    console.log(this._listaDeCompras);
    this.listaDeCompras.next(this._listaDeCompras);
  }

  eliminarDelCarrito(paleta: Paletas){
    let item: Paletas = this._listaDeCompras.find(v1 => v1.modelo == paleta.modelo);
    if(item){
      this._listaDeCompras.pop();
    }
    console.log(this._listaDeCompras);
    this.listaDeCompras.next(this._listaDeCompras);
  }
  
  cancelarDelcarrito(paleta: Paletas[]){

  }
}
