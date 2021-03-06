import { Component, OnInit } from '@angular/core';
import { NavigationError } from '@angular/router';
import { PadelCartService } from '../padel-cart.service';
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
    descripcion: "Su composición en FIBER GLASS aporta el máximo confort en cada golpe.",
    precio: 14.99,
    imagen: "match 2.0.jpg",
    stock: 20,
    promocion: true,
    cantidad: 0
  },
  {
    modelo: "Drive 2.0",
    peso: "360-375 g.",
    descripcion: "La goma EVA SOFT PERFORMANCE aporta el máximo confort en cada golpe.",
    precio: 15.99,
    imagen: "drive_20_.jpg",
    stock: 29,
    promocion: true,
    cantidad: 0
  },
  {
    modelo: "Essnova Carbon 2.0",
    peso: "360-375 g.",
    descripcion: "Su composición en carbono proporciona una potencia excepcional",
    precio: 24.99,
    imagen: "./imagenes/essnova-carbon.jpg",
    stock: 0,
    promocion: false,
    cantidad: 0
  },
  {
    modelo: "Carbon CTRL 2.0",
    peso: "360-375 g.",
    descripcion: "Incorpora la tecnología Spin Blade que favorece los efectos.",
    precio: 28.25,
    imagen: "./imagenes/carbon_control.jpg",
    stock: 0,
    promocion: false,
    cantidad: 0
  },
  {
    modelo: "Adipower Soft 2.0",
    peso: "360-375 g.",
    descripcion: "Pensada para el jugador que busca una pala con potencia y tacto SOFT.",
    precio: 39.89,
    imagen: "./imagenes/adipower_shot.jpg",
    stock: 13,
    promocion: false,
    cantidad: 0
  },
  {
    modelo: "Adipower Light 2.0",
    peso: "360-375 g.",
    descripcion: "Es la pala más potente con peso reducido dentro de nuestra familia.",
    precio: 39.99,
    imagen: "./imagenes/adipower_light.jpg",
    stock: 27,
    promocion: false,
    cantidad: 0
  },
  {
    modelo: "Adipower WPT",
    peso: "360-375 g.",
    descripcion: "Con la tecnología EXOSKELETON insertada en el corazón, conseguirás tu máxima potencia.",
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

  constructor(private carrito: PadelCartService) { 
  }

  ngOnInit(): void {
  }

  agregarAlCarrito(paleta: Paletas): void{
    this.carrito.agregarAlCarrito(paleta);
    paleta.stock -= paleta.cantidad;
    paleta.cantidad = 0;
    console.log(paleta.stock);
  }

  maxAlcanzado(m: string){
    alert(m);
  }
 

}
