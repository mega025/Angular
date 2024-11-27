import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Producto} from "./producto";

@Injectable({
  providedIn: 'root'
})
export class EnviarProductoService {

  producto:BehaviorSubject<Producto| null> = new BehaviorSubject<Producto | null>(null);
  producto$: Observable<Producto | null> = this.producto.asObservable()

  constructor() { }

  enviarProducto(valor: Producto|null) {
    this.producto.next(valor);

  }
}
