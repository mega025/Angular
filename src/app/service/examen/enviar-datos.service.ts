import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Lista} from "./lista";



@Injectable({
  providedIn: 'root'
})


export class EnviarDatosService {
  detalles :BehaviorSubject<Lista []| null> = new BehaviorSubject<Lista []| null>(null);
  info$ : Observable<Lista []|null> = this.detalles.asObservable();

  constructor() { }

  updateDetalles(info: Lista[]){
    this.detalles.next(info);
  }

}
