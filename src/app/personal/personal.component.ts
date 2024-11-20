import { Component } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.scss'
})
export class PersonalComponent {
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
