import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { PadelCartService } from '../padel-cart.service';
import { Paletas } from '../paletas-list/paletas';

@Component({
  selector: 'app-store-carrito',
  templateUrl: './store-carrito.component.html',
  styleUrls: ['./store-carrito.component.scss']
})
export class StoreCarritoComponent implements OnInit {

  listaDeCompras: Paletas[];
  constructor(private carrito: PadelCartService) {
    this.carrito.listaDeCompras.subscribe(observable => this.listaDeCompras = observable);
   }

  ngOnInit(): void {
  }

  obtenerMontoTotal(){
    let monto = 0;
    for (let paleta of this.listaDeCompras){
      monto += paleta.precio*paleta.cantidad;
    }
    return monto;
  }
}
