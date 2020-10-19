import { Component, OnInit } from '@angular/core';
import { NavigationError } from '@angular/router';
import { Paletas } from './paletas';

@Component({
  selector: 'app-paletas-list',
  templateUrl: './paletas-list.component.html',
  styleUrls: ['./paletas-list.component.scss']
})
export class PaletasListComponent implements OnInit {

  paletas: Paletas[] = [{
    modelo: "Match 2.0",
    peso: "360-375 g.",
    descripcion: "Su composición en FIBER GLASS y la goma SOFT PERFORMANCE aportan el máximo confort para que disfrutes de cada golpe.",
    precio: 14.99,
    imagen: "match 2.0.jpg",
    stock: 20,
    promocion: true,
    cantidad: 0
  },
  {
    modelo: "Drive 2.0",
    peso: "360-375 g.",
    descripcion: "Su composición en FIBER GLASS y la goma EVA SOFT PERFORMANCE, aportan el máximo confort en cada golpe.",
    precio: 15.99,
    imagen: "drive_20_.jpg",
    stock: 29,
    promocion: true,
    cantidad: 0
  },
  {
    modelo: "Essnova Carbon 2.0",
    peso: "360-375 g.",
    descripcion: "Su composición en carbono y la goma EVA SOFT PERFORMANCE proporcionan una potencia excepcional y un tacto realmente confortable..",
    precio: 24.99,
    imagen: "./imagenes/essnova-carbon.jpg",
    stock: 14,
    promocion: false,
    cantidad: 0
  },
  {
    modelo: "Carbon CTRL 2.0",
    peso: "360-375 g.",
    descripcion: "Incorpora la tecnología Spin Blade que, junto con los Smart Holes Curve, permiten generar una mayor rotación de la pelota y favorece los efectos.",
    precio: 28.25,
    imagen: "./imagenes/carbon_control.jpg",
    stock: 0,
    promocion: false,
    cantidad: 0
  },
  {
    modelo: "Adipower Soft 2.0",
    peso: "360-375 g.",
    descripcion: "Pensada para el jugador que busca una pala con potencia y tacto SOFT. La adipower SOFT 2.0 es la pala más potente y confortable dentro de nuestra familia más tecnológica",
    precio: 39.89,
    imagen: "./imagenes/adipower_shot.jpg",
    stock: 13,
    promocion: false,
    cantidad: 0
  },
  {
    modelo: "Adipower Light 2.0",
    peso: "360-375 g.",
    descripcion: "La adipower LIGHT 2.0 es la pala más potente con peso reducido dentro de nuestra familia más tecnológica.",
    precio: 39.99,
    imagen: "./imagenes/adipower_light.jpg",
    stock: 27,
    promocion: false,
    cantidad: 0
  },
  {
    modelo: "Adipower WPT",
    peso: "360-375 g.",
    descripcion: "Sensación inmejorable de golpeo, sacando el máximo partido a cada toque técnico. Junto a la tecnología EXOSKELETON insertada en el corazón, conseguirás en tus golpes la máxima potencia.",
    precio: 18.79,
    imagen: "./imagenes/adipower-wpt.jpg",
    stock: 12,
    promocion: true,
    cantidad: 0
  },
  {
    modelo: "AdidasPrecision Pro",
    peso: "330 g",
    descripcion: "Recomendada para jugadores principiantes",
    precio: 8.19,
    imagen: "./imagenes/adidas-precision.jpg",
    stock: 0,
    promocion: false,
    cantidad: 0
  },
  {
    modelo: "Supernova Carbon Attk 1.9",
    peso: "360-375 g.",
    descripcion: " Su balance en la parte superior de la pala hace este modelo ideal para los jugadores de ataque.",
    precio: 21.49,
    imagen: "./imagenes/supernova-.jpg",
    stock: 10,
    promocion: true,
    cantidad: 0
  }];

  constructor() { }

  ngOnInit(): void {
  }

  decrementar(paleta: Paletas): void{
   if(paleta.cantidad > 0){
    paleta.cantidad--;
   }
  }

  incrementar(paleta: Paletas): void{
    if(paleta.cantidad<paleta.stock){
      paleta.cantidad++;
    }
  }

  cambiarCantidad(event, paleta: Paletas): void{
    //tengo que chequear que lo que ingresa el usuario no sea mayor al stock
    //      si es menor
    //            se vuelve la cantidad 
    //      si es mayor
    //            que se vuelva la cantidad q haya en stock
    //                y que avise que el stock llega maximo a esa cantidad
    if(event.target.value < paleta.stock){
      paleta.cantidad = event.target.value;
    }
   else if(event.target.value > paleta.stock){
     paleta.cantidad = paleta.stock;
   }
  }

}
