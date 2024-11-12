import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailService {

  detalles :BehaviorSubject<string> = new BehaviorSubject<string>("");
  detalles$ : Observable<string> = this.detalles.asObservable();

  constructor() { }

  detallado (detail : string){
    this.detalles.next(detail);
  }
}
