import { Injectable } from '@angular/core';
import {Lista} from "./lista";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DetallesServiceService {

  detalles :BehaviorSubject<Lista[]|null> = new BehaviorSubject<Lista[]|null>(null);
  detalles$ : Observable<Lista[]|null> = this.detalles.asObservable();

  constructor() { }

  detallado(detail: Lista[]){
    this.detalles.next(detail);
  }


}
