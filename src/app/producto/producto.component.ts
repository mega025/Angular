import { Component } from '@angular/core';
import {Producto} from "../service/repaso/producto";
import {EnviarProductoService} from "../service/repaso/enviar-producto.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {

  arryaProducto : Producto[] = [
    {id: 1, nombre:"Agua", precio:"1€", stock:true},
    {id: 2, nombre:"cola", precio:"2€", stock:true},
    {id: 3, nombre:"fanta", precio:"1.95€", stock:false},
    {id: 4, nombre:"Agua con gas", precio:"1.2€", stock:true},
    {id: 5, nombre:"cafe ", precio:"1.5€", stock:false},
  ]
  constructor(
      private enviarProductoService: EnviarProductoService,
      private router: Router,
  ) {}

  enviarDatosProducto(valor: Producto){
    this.enviarProductoService.enviarProducto(valor);
    this.router.navigate(['/Detalles-producto']);
  }
}
