import {Component, OnInit} from '@angular/core';
import {EnviarProductoService} from "../service/repaso/enviar-producto.service";
import {Producto} from "../service/repaso/producto";

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.scss'
})
export class DetalleProductoComponent implements OnInit {
  producto: Producto | null = null;

  constructor(
      private enviarProductoService: EnviarProductoService,
  ) {}

  ngOnInit(): void {
    this.enviarProductoService.producto$.subscribe(valor =>
    this.producto=(valor));
  }

}
