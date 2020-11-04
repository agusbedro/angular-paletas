import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Paletas } from '../paletas-list/paletas';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {

  constructor() { }

  @Input()
  cantidad: number;

  @Input()
  max: number;

  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxAlcanzado: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  decrementar(): void{
    if(this.cantidad > 0){
     this.cantidad--;
     this.cantidadChange.emit(this.cantidad);
    }
    
   }
 
   incrementar(): void{
     if(this.cantidad<this.max){
       this.cantidad++;
       this.cantidadChange.emit(this.cantidad);
     }
     else{
      this.maxAlcanzado.emit("No hay mas");
    }
   }
 
   cambiarCantidad(event): void{
     //tengo que chequear que lo que ingresa el usuario no sea mayor al stock
     //      si es menor
     //            se vuelve la cantidad 
     //      si es mayor
     //            que se vuelva la cantidad q haya en stock
     //                y que avise que el stock llega maximo a esa cantidad
     if(event.target.value < this.max){
       this.cantidad = event.target.value;
       this.cantidadChange.emit();
     }
     else if(event.target.value > this.max){
      this.cantidad = this.max;
      this.cantidadChange.emit(this.cantidad);

     }
   }
}
