import { Component } from '@angular/core';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrl: './citas.component.scss'
})
export class CitasComponent {
  ocultar : boolean = false;
  ocultar2 : boolean = false;
  ocultar3 : boolean = false;

  toggleOcultar(){
    this.ocultar = !this.ocultar
  }


  toggleOcultar2(){
    this.ocultar2 = !this.ocultar2
  }
  toggleOcultar3(){
    this.ocultar3 = !this.ocultar3
  }

}
