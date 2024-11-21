import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-deporte',
  templateUrl: './deporte.component.html',
  styleUrl: './deporte.component.scss'
})
export class DeporteComponent {
  ocultar : boolean = false;
  ocultar2 : boolean = false;
  ocultar3 : boolean = false;
  constructor(
      private router: Router,
  ) {
  }

  toggleOcultar(){
    this.ocultar = !this.ocultar
  }


  toggleOcultar2(){
    this.ocultar2 = !this.ocultar2
  }
  toggleOcultar3(){
    this.ocultar3 = !this.ocultar3
  }

  anadir(){
    this.router.navigate(['/Anadir']);
  }
  Editar(){
    this.router.navigate(['/Editar']);
  }

}
