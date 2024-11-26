import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modal : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  modal$ : Observable<boolean> = this.modal.asObservable()


  constructor() {}

  mostrarModal(mostrar: boolean){
    this.modal.next(mostrar);

  }
}
