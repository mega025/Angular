import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {PokemonApi} from '../../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailService {

  detalles :BehaviorSubject<PokemonApi|null> = new BehaviorSubject<PokemonApi|null>(null);
  detalles$ : Observable<PokemonApi|null> = this.detalles.asObservable();

  constructor() { }

  detallado (detail : PokemonApi|null){
    this.detalles.next(detail);
  }
}
